import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import moment from "moment";

import { Row, Col, Card } from "antd";

import { getEvents } from "../../actions/eventActions";

import Chart from "./Chart";

class ChartsContainer extends Component {
  componentDidMount(){
    this.props.getEvents();
  }

  render() {

    const {events} = this.props.event;

    const sinceBeginning = events;
    const lastSevenDays = events.filter(event => {
      return event.start > moment().startOf().subtract(7, 'd');
    });

    const lastThirtyDays = events.filter(event => {
      return event.start > moment().startOf().subtract(30, 'd');
    });

    const today = events.filter(event => {
      return event.start > moment().startOf();
    })

    return (
      <div>
        <Row>
          <Col xl={12}>
            <Card>
              <Chart title="Since beginning" events={sinceBeginning}/>
            </Card>
          </Col>
          <Col xl={12}>
            <Card>
              <Chart title="Last 30 Days" events={lastThirtyDays}/>
            </Card>
          </Col>
          <Col xl={12}>
            <Card>
              <Chart title="Last 7 Days" events={lastSevenDays}/>
            </Card>
          </Col>
          <Col xl={12}>
            <Card>
              <Chart title="Today" events={today}/>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, { getEvents })(ChartsContainer);
