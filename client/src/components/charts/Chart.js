import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import moment from "moment";

class Chart extends Component {
  render() {
    const { events } = this.props;

    const groupedByTagName = events.reduce((r, a) => {
      r[a.tag.name] = r[a.tag.name] || [];
      r[a.tag.name].push(a);
      return r;
    }, Object.create(null));

    const labels = [];
    const colors = [];
    const durations = [];
    for (var name in groupedByTagName) {
      //get color from the first element of array from each group
      const color = groupedByTagName[name][0].tag.color;

      //get total time by adding all the time difference between start and end date
      let duration = 0;
      groupedByTagName[name].forEach(el => {
        duration += moment
          .duration(moment(el.end).diff(moment(el.start)))
          .asHours();
      });

      labels.push(name);
      colors.push(color);
      durations.push(duration);
    }

    const data = {
      labels: labels,
      datasets: [
        {
          data: durations,
          backgroundColor: colors,
          hoverBackgroundColor: colors
        }
      ]
    };

    return (
      <div>
        <h2 style={{textAlign:'center'}}>{this.props.title}</h2>
        <Doughnut data={data} />
      </div>
    );
  }
}

const groupBy = (list, keyGetter) => {
  const map = new Map();
  list.forEach(item => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
};

export default Chart;
