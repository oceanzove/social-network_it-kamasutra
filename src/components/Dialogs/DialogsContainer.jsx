import {connect} from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogues: state.dialogsPage.dialogues
  }
};

const mapDispatchToProps = (dispatch) => {

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;