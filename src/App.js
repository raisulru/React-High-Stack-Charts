import React, { Component } from 'react';
import './App.css';
import Highcharts from './graph';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NegativeHighCharts from './negative-stock-graph';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Icon from 'react-icons-kit';
import { starFull } from 'react-icons-kit/icomoon/starFull';

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'three' },
  { value: 'four', label: 'four' },
  { value: 'five', label: 'five' },
]

class App extends Component {
    getInitialState () {
        return {
            disabled: false,
            searchable: this.props.searchable,
        };
    }

    state = {
        selectedOption: '',
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }

    render() {
    return (
          <div className="container instruments">
              <div className='row header-widgets'>
                  <div className="col-md-3">
                    <h2>
                    <Icon className='kit' style={{ color: '#00c63b' }} size={25} icon={starFull} />4/5
                    </h2>
                    <p>rating</p>
                  </div>
                  <div className="col-md-3 percent">
                      <h2>0.23%</h2>
                      <p>3 months</p>
                  </div>
                  <div className="col-md-3 percent">
                      <h2>4.45%</h2>
                      <p>Today</p>
                  </div>
                  <div className="col-md-3">
                      <h2>4.95 SEK</h2>
                      <p>Price</p>
                  </div>
              </div>
              <div className="row stock-table">
                <div className="col-md-4">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Period</th>
                          <th>Stock</th>
                          <th>Index</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1 Month</td>
                          <td>1,24%</td>
                          <td>1 Month</td>
                        </tr>
                        <tr>
                          <td>1 Month</td>
                          <td>1,24%</td>
                          <td>1 Month</td>
                        </tr>
                        <tr>
                          <td>1 Month</td>
                          <td>1,24%</td>
                          <td>1 Month</td>
                        </tr>
                        <tr>
                          <td>1 Month</td>
                          <td>1,24%</td>
                          <td>1 Month</td>
                        </tr>
                        <tr className='table-primary'>
                          <td>1 Month</td>
                          <td>1,24%</td>
                          <td>1 Month</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-8">
                  <Highcharts />
                  <div className="ui-select">
                    <Select
                      name="form-field-name"
                      className='ui-select'
                      placeholder='search and compare with an index'
                      value={this.state.selectedOption.value}
                      onChange={this.handleChange}
                      clearable={false}
                      searchable={this.state.searchable}
                      options={options}
                    />
                  </div>
                </div>
              </div>
              <div className="row widget-footer">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <span>lorem</span>
                        <p>lorem ipsum</p>
                        <span>lorem</span>
                        <p>lorem ipsum</p>
                        <span>lorem</span>
                        <p>lorem ipsum</p>
                      </div>
                      <div className="col-md-6">
                        <span>lorem</span>
                        <p>--</p>
                        <span>lorem</span>
                        <p>--</p>
                        <span>lorem</span>
                        <p>lorem ipsum</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 footer-right">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Antal</th>
                            <th>kop</th>
                            <th className='text-center'>Graph</th>
                            <th>saji</th>
                            <th>Antal</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1343</td>
                            <td>2434</td>
                            <td><NegativeHighCharts /></td>
                            <td>24324</td>
                            <td>2434</td>
                          </tr>
                          <tr>
                            <td>1343</td>
                            <td>2434</td>
                            <td><NegativeHighCharts /></td>
                            <td>24324</td>
                            <td>2434</td>
                          </tr>
                          <tr>
                            <td>1343</td>
                            <td>2434</td>
                            <td><NegativeHighCharts /></td>
                            <td>24324</td>
                            <td>2434</td>
                          </tr>
                          <tr>
                            <td>1343</td>
                            <td>2434</td>
                            <td><NegativeHighCharts /></td>
                            <td>24324</td>
                            <td>2434</td>
                          </tr>
                          <tr>
                            <td>1343</td>
                            <td>2434</td>
                            <td><NegativeHighCharts /></td>
                            <td>24324</td>
                            <td>2434</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
          </div>
        );
    }
}

export default App;
