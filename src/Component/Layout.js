import React, { Component } from "react";
import { arrSeats } from "./DataArrSeats";
import HandleSeat from "./HandleSeat";
export default class Layout extends Component {
  state = {
    value: { Username: "", Numseats: "", arrSeat: [] },
    qualitySeat: 0,
    disabledInput: false,
    disabledBtn: true,
    disabledCheck: false,
    error: "",
    res: "",
  };
  getValue = (event) => {
    let { value, id } = event.target;
    let newValue = this.state.value;
    newValue[id] = value;
    this.setState({
      value: { [id]: value },
    });
    if (this.state.value.Numseats == "" || this.state.value.Username == "") {
      this.setState({
        ...this.state,
        disabledBtn: true,
      });
    } else if (
      this.state.value.Numseats !== "" ||
      this.state.value.Username !== ""
    ) {
      this.setState({
        ...this.state,
        disabledBtn: false,
      });
    }
  };
  cancelSeat = (event) => {
    console.log("backtotop");
    window.scrollTo(0, 0);
    this.setState({
      ...this.state,
      Username: " ",
      Numseats: " " * 1,
      arrSeat: [],
      qualitySeat: 0,
      disabledInput: false,
      disabledBtn: false,
      disabledCheck: false,
      error: "",
      res: "",
    });
  };
  submitSeat = (event) => {
    this.state.qualitySeat == this.state.value.Numseats
      ? this.setState({
          ...this.state,
          disabledCheck: true,
          disabledInput: true,
          disabledBtn: true,
          error: "",
          res: "Đặt vé thành công! Hãy thanh toán ngay!!!",
        })
      : this.setState({
          error: "Chưa đúng số lượng ghế mà bạn cần!",
        });
    console.log(this.state);
  };

  getChecked = (event) => {
    let { checked, value } = event.target;

    let newValue = this.state.value.arrSeat;
    if (checked) {
      this.state.value.arrSeat.push(value);
      this.setState({
        ...this.state,
        qualitySeat: this.state.qualitySeat + 1,
      });
    } else if (checked == false) {
      let arrNew = newValue.filter((item) => item !== value);
      this.setState({
        ...this.state,
        qualitySeat: this.state.qualitySeat - 1,
        value: {
          ...this.state.value,
          arrSeat: arrNew,
        },
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <div>
            <link rel="stylesheet" href="/assests/css/font-awesome.min.css" />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n* {\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n}\n\n\n#w3lDemoBar.w3l-demo-bar {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  padding: 40px 5px;\n  padding-top:70px;\n  margin-bottom: 70px;\n  background: #0D1326;\n  border-top-left-radius: 9px;\n  border-bottom-left-radius: 9px;\n}\n\n#w3lDemoBar.w3l-demo-bar a {\n  display: block;\n  color: #e6ebff;\n  text-decoration: none;\n  line-height: 24px;\n  opacity: .6;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n#w3lDemoBar.w3l-demo-bar span.w3l-icon {\n  display: block;\n}\n\n#w3lDemoBar.w3l-demo-bar a:hover {\n  opacity: 1;\n}\n\n#w3lDemoBar.w3l-demo-bar .w3l-icon svg {\n  color: #e6ebff;\n}\n#w3lDemoBar.w3l-demo-bar .responsive-icons {\n  margin-top: 30px;\n  border-top: 1px solid #41414d;\n  padding-top: 40px;\n}\n#w3lDemoBar.w3l-demo-bar .demo-btns {\n  border-top: 1px solid #41414d;\n  padding-top: 30px;\n}\n#w3lDemoBar.w3l-demo-bar .responsive-icons a span.fa {\n  font-size: 26px;\n}\n#w3lDemoBar.w3l-demo-bar .no-margin-bottom{\n  margin-bottom:0;\n}\n.toggle-right-sidebar span {\n  background: #0D1326;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  color: #e6ebff;\n  border-radius: 50px;\n  font-size: 26px;\n  cursor: pointer;\n  opacity: .5;\n}\n.pull-right {\n  float: right;\n  position: fixed;\n  right: 0px;\n  top: 70px;\n  width: 90px;\n  z-index: 99999;\n  text-align: center;\n}\n/* ============================================================\nRIGHT SIDEBAR SECTION\n============================================================ */\n\n#right-sidebar {\n  width: 90px;\n  position: fixed;\n  height: 100%;\n  z-index: 1000;\n  right: 0px;\n  top: 0;\n  margin-top: 60px;\n  -webkit-transition: all .5s ease-in-out;\n  -moz-transition: all .5s ease-in-out;\n  -o-transition: all .5s ease-in-out;\n  transition: all .5s ease-in-out;\n  overflow-y: auto;\n}\n\n\n/* ============================================================\nRIGHT SIDEBAR TOGGLE SECTION\n============================================================ */\n\n.hide-right-bar-notifications {\n  margin-right: -300px !important;\n  -webkit-transition: all .3s ease-in-out;\n  -moz-transition: all .3s ease-in-out;\n  -o-transition: all .3s ease-in-out;\n  transition: all .3s ease-in-out;\n}\n\n\n\n@media (max-width: 992px) {\n  #w3lDemoBar.w3l-demo-bar a.desktop-mode{\n      display: none;\n\n  }\n}\n@media (max-width: 767px) {\n  #w3lDemoBar.w3l-demo-bar a.tablet-mode{\n      display: none;\n\n  }\n}\n@media (max-width: 568px) {\n  #w3lDemoBar.w3l-demo-bar a.mobile-mode{\n      display: none;\n  }\n  #w3lDemoBar.w3l-demo-bar .responsive-icons {\n      margin-top: 0px;\n      border-top: none;\n      padding-top: 0px;\n  }\n  #right-sidebar,.pull-right {\n      width: 90px;\n  }\n  #w3lDemoBar.w3l-demo-bar .no-margin-bottom-mobile{\n      margin-bottom: 0;\n  }\n}\n',
              }}
            />
          </div>

          <h1>Movie Seat Selection</h1>
          <div className="container">
            <div className="w3ls-reg">
              <div className="inputForm">
                <h2>Nhập thông tin cá nhân và chọn số chỗ</h2>
                <div className="mr_agilemain">
                  <div className="agileits-left">
                    <label>
                      {" "}
                      Tên
                      <span>*</span>
                    </label>
                    <input
                      disabled={this.state.disabledInput}
                      onChange={this.getValue}
                      type="text"
                      id="Username"
                      required
                    />
                  </div>
                  <div className="agileits-right">
                    <label>
                      {" "}
                      Số người
                      <span>*</span>
                    </label>
                    <input
                      disabled={this.state.disabledInput}
                      onChange={this.getValue}
                      type="number"
                      id="Numseats"
                      required
                      min={1}
                    />
                  </div>
                </div>
                <button
                  onClick={this.submitSeat}
                  disabled={this.state.disabledBtn}
                  className="btn btn-success opacity-75 mt-2"
                >
                  Đặt chỗ
                </button>
                <p className="text-danger">{this.state.error}</p>
                <p className="text-success">{this.state.res}</p>
              </div>

              <ul className="seat_w3ls">
                <li className="smallBox greenBox">Chỗ của bạn</li>
                <li className="smallBox redBox">Hết chỗ</li>
                <li className="smallBox emptyBox">Chỗ Trống</li>
              </ul>

              <div
                className="seatStructure txt-center"
                style={{ overflowX: "auto" }}
              >
                <p id="notification" />
                <table id="seatsBlock">
                  <tbody>
                    <tr>
                      <td />
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>

                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                    </tr>
                    {arrSeats.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.hang}</td>
                          {item.danhSachGhe.map((item1, index1) => {
                            return (
                              <td key={index1}>
                                <input
                                  disabled={this.state.disabledCheck}
                                  onChange={this.getChecked}
                                  type="checkbox"
                                  className="seats"
                                  defaultValue={item1.soGhe}
                                />
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="screen">
                  <h2 className="wthree">MÀN HÌNH</h2>
                </div>
              </div>

              <HandleSeat
                cancelSeat={this.cancelSeat}
                value={this.state.value}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
