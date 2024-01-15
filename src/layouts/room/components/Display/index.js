// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import Login from "./Login";
import Control from "./Control";
import PropTypes from 'prop-types';


function Display({ roomId }) {
  return (
    <Card sx={{ height: "95vh", background:"#D5CEA3", width:"45vh", justifyContent:"space-around",alignContent:"space-around", marginLeft: 'auto' }}>
      <Control roomId={roomId}/>
      <Login/>
    </Card>
  );
}



export default Display;

Display.propTypes = {
  roomId: PropTypes.string,
};

