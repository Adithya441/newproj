import { useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Configurations = () => {
  const [configs, setConfigs] = useState();
  const [editConfigs, setEditConfigs] = useState();
  const [meterData, setMeterData] = useState();
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([]);
  
  return (
    <div className="container-fluid col-12">
      <form className="col-xs-12 col-md-10 mx-auto">
        {/* Radio Buttons - Get/Set */}
        <div className="d-flex justify-content-center gap-4 mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value="option1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="gridRadios1">
              Get
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="gridRadios2">
              Set
            </label>
          </div>
        </div>
  
        {/* Dropdowns - Configurations and Get/Set Configurations */}
        <div className="d-flex justify-content-center gap-4 mb-4">
          <div className="col-lg-4">
            <label htmlFor="Configurations">Configurations</label>
            <select
              id="Configurations"
              value={configs}
              className="form-control border border-left-3 border-left-danger"
              onChange={(e) => setConfigs(e.target.value)}
            >
              <option value="LOAD_CURTAILMENT">Load Curtailment</option>
              <option value="GENERAL_CONFIGURATION">General Configuration</option>
              <option value="PRE_PAYMENT_CONFIGURATION">PrePayment Configuration</option>
              <option value="ACTIVITYCALENDER">Activity Calendar</option>
              <option value="PUSH_SCHEDULE_CONFIGURATIONS">Push Schedule Configurations</option>
              <option value="ESW_CONFIGURATION">ESW Configuration</option>
              <option value="LRC_CONFIGURATION">LRC Configuration</option>
            </select>
          </div>
          <div className="col-lg-4">
            <label htmlFor="editconfigs">Get/Set Configurations</label>
            <select
              id="editconfigs"
              value={editConfigs}
              className="form-control border border-left-3 border-left-danger"
              onChange={(e) => setEditConfigs(e.target.value)}
            >
              <option value="LOAD_CURTAILMENT_STATE">Load Curtailment State</option>
              <option value="LOAD_NORMAL">Load Limit Normal (W)</option>
              <option value="LOAD_MIN_UNDER_DURATION">Min Under Threshold Duration (Min)</option>
              <option value="LOAD_MIN_OVER_DURATION">Min Over Threshold Duration (Min)</option>
              <option value="PASSIVE_RELAY_TIME">Passive Relay Time</option>
              <option value="RTC">RTC</option>
              <option value="PROFILE_CAPTURE_PERIOD">Profile Capture Period (Min)</option>
              <option value="DEMAND_INTEGRATION_PERIOD">Demand Integration Period (Min)</option>
              <option value="BILLING_PERIOD">Billing Day Change</option>
              <option value="PUSHIPCONFIG">IP Address</option>
              <option value="INSTANT_PUSH_CONFIGTIME">Instant Push</option>
              <option value="METERING_MODE">Metering Mode</option>
              <option value="PAYMENT_MODE">Payment Mode</option>
              <option value="LAST_TOCKEN_RECHARGE_AMOUNT">Last token recharge amount</option>
              <option value="LAST_TOCKEN_RECHARGE_TIME">Last token recharge time</option>
              <option value="BALANCE_TIME">Current Balance Time</option>
              <option value="TOTAL_AMOUNT_AT_LAST_RECHARGE">Total Amount At Last Recharge</option>
              <option value="BALANCE_AMOUNT">Current Balance Amount</option>
              <option value="DLMSACONF">Activity Calendar</option>
              <option value="MAX_DEMAND_RESET">Max Demand Reset</option>
              <option value="EVENT_PUSHIPCONFIG">Event IP Address</option>
              <option value="CT_RATIO">CT Ratio</option>
              <option value="PT_RATIO">PT Ratio</option>
              <option value="APPARENT_ENERGY">Apparent energy computation type</option>
              <option value="NODEPUSHCONFIGURATION">Node Push Configuration</option>
              <option value="ESW_CONFIG">ESW Configuration</option>
              <option value="LRC_CONFIG">LRC Config</option>
            </select>
          </div>
        </div>
  
        {/* Submit Button */}
        <div className="text-center mt-3">
          <button className="btn btn-primary mb-1">Submit Request</button>
        </div>
      </form>
  
      {/* AG Grid Container */}
      <div className="text-center mt-4">
        {meterData ? (
          <div
            className="container-fluid ag-theme-quartz mt-4 col-md-12 mx-auto"
            style={{ height: 350, width: "100%" }}
          >
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              pagination={true}
              paginationPageSize={5}
              paginationPageSizeSelector={[5, 10, 15, 20]}
            />
          </div>
        ) : (
          <div className="mt-3 text-center text-danger">
            No records found...
          </div>
        )}
      </div>
    </div>
  );
}
export default Configurations;  