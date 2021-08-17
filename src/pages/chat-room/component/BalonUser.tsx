
import { IonAvatar } from "@ionic/react";
import React from "react";


const BalonUser: React.FC<any> = ({ message, userId, file ,showImgZoom,location,showModelMap}) => {

  return (
    <div className="card bg-sohbet border-0 m-0 p-0">
      {
        // d-xl-none .d-xl-block d-lg-none .d-lg-block
      }{" "}
      <span
        style={{
        
          textAlign: "left",
        }}
        className="name-user"
      >
        {" "}
      mohammad
        {/* mohamamd */}
      </span>
      <div
        id="sohbet"
        className="card border-0 m-0 p-0 position-relative bg-transparent"
        style={{ position: "relative" }}
      >
        {" "}
        <IonAvatar
      
          className="img-user"
        >
          <img
            src={
           
             
                 "/assets/img/imgStudent.png"
            }
          />
        </IonAvatar>
        {true ? (
          <div
            className="balon2 p-2 m-0 position-relative"
            style={{ paddingLeft: "25px !important", position: "relative" }}
            onClick={() => {
              "          setshowDate(!showDate);";
            }}
            /*  data-is={moment(props.DataMesg.created_at).format(
        "MMM Do YYYY, h:mm:ss"
      )} */
          >
          
            <a className="float-left sohbet2">
              {" "}
              hi how are you
  
            </a>
          </div>
        ) : (
          <div
            className="balonFile2 p-2 m-0 position-relative"
            onClick={() => {
              /*    setshowDate(!showDate); */
            }}
            /*  data-is={moment(props.DataMesg.created_at).format(
        "MMM Do YYYY, h:mm:ss"
      )} */
          ></div>
        )}
      </div>
    </div>
  );
};
export default React.memo(BalonUser);
