import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { removePortAction } from "../actions/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "150px",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
  connect: {
    "& > *": {
      margin: theme.spacing(1),
      color: "#537791",
    },
  },
}));

const mapStateToProps = (state) => {
  return {
    port: state.mainReducer.port,
    connectionTime: state.mainReducer.connectionTime
  };
};

const mapDistpatchToProps = (dispatch) => {
  return {
    removePortAction: () => {
      dispatch(removePortAction());
    },
  };
};

//component
function DisconnectCluster(props) {
  const classes = useStyles();

  return (
    <>
      <h5>Port: {props.port} </h5>
      <h5>Connection Time: {props.connectionTime} </h5>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="broker"
          label="Broker Port"
          type="search"
          variant="outlined"
        />
        <TextField
          id="exporter"
          label="Exporter Port"
          type="search"
          variant="outlined"
        />
        <Button
          className={classes.connect}
          // color="#537791"
          variant="contained"
          href="#contained-buttons"
          onClick={(e) => {
            e.preventDefault();
            props.removePortAction();
          }}
        >
          Disconnect
        </Button>
      </form>
    </>
  );
}

// export default ConnectCluster;
export default connect(mapStateToProps, mapDistpatchToProps)(DisconnectCluster);
