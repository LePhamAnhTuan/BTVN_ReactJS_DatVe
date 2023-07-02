import React, { Component } from "react";

export default class extends Component {
  state = {
    arrThanhToan: [],
  };
  btnThanhToan = () => {
    let newarrThanhToan = this.state.arrThanhToan;
    newarrThanhToan.push(this.props.value);
    this.setState({
      ...this.state,
      arrThanhToan: newarrThanhToan,
    });
  };
  render() {
    let danhSachThanhToan = this.props.value;
    console.log(this.state.arrThanhToan);
    return (
      <div className="container d-flex flex-column">
        <div className="btn_action">
          {" "}
          <button onClick={this.btnThanhToan} className="btn btn-success">
            Xác Nhận Thanh Toán
          </button>
          <button onClick={this.props.cancelSeat} className="btn btn-danger">
            Đặt lại vé
          </button>
        </div>
        <div
          className="displayerBoxes txt-center w-100"
          style={{ overflowX: "auto" }}
        >
          <table className="Displaytable w3ls-table" width="100%">
            <tr>
              <td width="30%">Họ Tên </td>
              <td>Số người </td>
              <td>Vị trí chỗ </td>
            </tr>
            {this.state.arrThanhToan.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.Username}</td>
                  <td>{item.Numseats}</td>
                  <td>
                    {item.arrSeat.map((item1) => {
                      return item1 + " ";
                    })}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}
