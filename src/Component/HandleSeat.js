import React, { Component } from "react";
import { saveLocal, getLocal, removeLocal } from "./LocalStorage";

export default class extends Component {
  state = {
    arrThanhToan: [],
  };

  btnThanhToan = () => {
    window.scrollTo(0, 0);
    this.props.clearInput();

    let newarrThanhToan = this.state.arrThanhToan;
    if (this.props.value.Username != "") {
      this.props.disabledChecked(newarrThanhToan);
      newarrThanhToan.push(this.props.value);
      this.setState({
        ...this.state,
        arrThanhToan: newarrThanhToan,
      });
      newarrThanhToan.map((item) => {
        let vitri = item.arrSeat;
        vitri.map((item1) => {
          document.getElementById(`${item1}`).checked = true;
          document.getElementById(`${item1}`).disabled = true;
        });
      });
      saveLocal(this.state.arrThanhToan);
      getLocal();
    } else {
      console.log("rong");
    }

    // this.props.disabledChecked(this.state.arrThanhToan);
  };

  btnXoa = (id) => {
    let arrThanhToan = this.state.arrThanhToan;
    let newARR = arrThanhToan.splice(id, 1);
    this.setState({
      ...this.state,
      arrThanhToan: arrThanhToan,
    });

    newARR.map((item) => {
      let viTriSeat = item.arrSeat;
      viTriSeat.map((item1) => {
        document.getElementById(`${item1}`).checked = false;
        document.getElementById(`${item1}`).disabled = false;
      });
    });
    saveLocal(this.state.arrThanhToan);
    getLocal();
    this.props.clearSeat();
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.disabledChecked !== nextProps.disabledChecked ||
      this.state.arrThanhToan !== nextState.arrThanhToan
    ) {
      return true; // re-render
    }

    return true;
  }
  componentDidMount() {
    const arrNew = getLocal();
    if (arrNew) {
      this.setState({
        arrThanhToan: arrNew,
      });
    }
  }
  render() {
    return (
      <div className="container d-flex flex-column">
        <div className="btn_action">
          <button
            disabled={this.props.disBtnThanhToan}
            onClick={this.btnThanhToan}
            className="btn btn-success"
          >
            Xác Nhận Thanh Toán
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
              <td>Action</td>
            </tr>
            {this.state.arrThanhToan.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.Username}</td>
                  <td>{item.Numseats}</td>
                  <td>
                    {item.arrSeat
                      .map((item1) => {
                        return item1 + " ";
                      })
                      .sort()}
                  </td>
                  <td>
                    <button
                      onClick={() => this.btnXoa(index)}
                      className="btn btn-danger opacity-75"
                    >
                      Xóa
                    </button>
                    {/* <button className="btn btn-warning opacity-75">Sửa</button> */}
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
