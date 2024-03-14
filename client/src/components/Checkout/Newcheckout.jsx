import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
// import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Newcheckout = () => {
  return (
    <>
      <div>
        <div
          class="modal fade"
          id="payOnlineModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Online Payment Mode
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <hr />
                <PayPalButton
                  createOrder={(data, actions) => createOrder(data, actions)}
                  onApprove={(data, actions) => onApprove(data, actions)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 bg-warning">
          <div className="container">
            <h6>Home / Checkout</h6>
          </div>
        </div>

        <div className="py-4">
          <div className="container">{checkout_HTML}</div>
        </div>
      </div>
    </>
  );
};

export default Newcheckout;
