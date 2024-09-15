import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import FullOption from "./pie-chart/FullOption";
import { setSubSkills } from "../../store/actions/skillAction";

interface IProps {
  data: ISkills[];
}

interface ISkills {
  title: string;
  value: string;
  color: string;
  heading: string;
  body: string;
  subSkills: ISubSkills[];
}

interface ISubSkills {
  name: string;
  level: string;
  image: { publicUrlTransformed: string };
  link: string;
}

const dispatchSubSkillsHelper = (allSkills, dispatch) => {
  let subSkill = [];

  if (allSkills) {
    allSkills.forEach((e: ISkills, index: number) => {
      if (e) {
        e.subSkills.forEach((elem: ISubSkills) => {
          subSkill.push({
            id: index,
            title: elem.name,
            val: elem.level,
          });
        });
      }
    });
  }

  dispatch(setSubSkills(subSkill));
};

const Skills: React.FC<IProps> = ({ data }) => {
  const dispatch = useDispatch();
  const skillPicked = useSelector((state) => state.skillReducer.skillPicked);

  useEffect(() => {
    dispatchSubSkillsHelper(data, dispatch);
  }, [data]);

  if (!data) return null;

  return (
    <section className="skill-area m-t-50">
    <div className="skill-image">
      <img
        src={"images/shapes/16.png"}
        className="back-image smaller"
        alt="shape"
      />
    </div>
    <div className="container">
      <div className="row h-100 ">
        <div className="col-lg-5 col-md-12">
          <div className="our-skill">
            <TransitionGroup key={skillPicked} className="section-title">
              <div>
                <span className="wow fadeInUp">
                  Some technologies I've worked with
                </span>

                <CSSTransition
                  key={skillPicked}
                  timeout={800}
                  classNames="item"
                >
                  <div className="wow fadeInDown">
                    <h3 className="wow fadeInDown">
                      {data.length > 0 && data[skillPicked]
                        ? data[skillPicked].title
                        : ""}
                    </h3>
                    {data.length > 0 && data[skillPicked] ? (
                      <div>
                        <h5>{data[skillPicked].heading}</h5>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data[skillPicked].body,
                          }}
                        ></div>

                        <div className="row justify-content-md-center m-t-40">
                          {data[skillPicked].subSkills.map((e, i) => {
                            if (e && e.image)
                              return (
                                <div
                                  key={i}
                                  className="col-lg-4 col-md-6 m-t-20 "
                                >
                                  <div className="single-about-box text-center">
                                    <a href={e.link}>
                                      <div className="icon">
                                        <img
                                          src={
                                            e.image.publicUrlTransformed
                                          }
                                          alt="image"
                                        />
                                      </div>
                                      <p>{e.name}</p>
                                    </a>
                                  </div>
                                </div>
                              );
                          })}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </CSSTransition>
              </div>
            </TransitionGroup>

            {/* <div className="col-lg-12 col-md-12">
              <BarSkill />
            </div> */}
          </div>
        </div>

        <div className="col-lg-7 col-md-12 align-items-end">
          <div className="m-t-20">
            {/* <FullOption data={dataMock} /> */}
            <FullOption data={data} />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default connect(null, { setSubSkills })(Skills);
