import { IonAvatar, IonRippleEffect, IonSlide, IonSlides } from "@ionic/react";
import { SliderStoriesProps } from "./props";
import "./style.scss";
export const SliderStories: React.FC<SliderStoriesProps> = ({
  listStories,
}) => {
  return (
    <div className={"slider-stories"}>
      <div className="scrolling-wrapper  ion-activatable ">
        <div style={{ width: "60px !important" }} className="card-slider">
          <IonAvatar className="avtar">
            <img
              className="image"
              src={process.env.PUBLIC_URL + "/assets/svg/Group 6 (1).svg"}
            />
          </IonAvatar>
          <p className="name">{"add Story"}</p>
        </div>
        {listStories.map((data, index: number) => {
          return (
            <div
              style={{ width: "60px !important" }}
              className="card-slider"
              key={index}
            >
              <IonAvatar className="avtar">
                <img className="image-story" src={data.imageProfile} />
                {data.active ? (
                  <span className="state-active">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/svg/Oval.svg"}
                    />
                  </span>
                ) : (
                  ""
                )}{" "}
              </IonAvatar>
              <p className="name">{data.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
