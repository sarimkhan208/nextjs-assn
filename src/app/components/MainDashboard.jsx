import React from "react";
import Profile from "./Profile";
import { VscTasklist } from "react-icons/vsc";
import { MdDashboard } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { TfiStatsUp } from "react-icons/tfi";
import { BsThreeDots, BsListTask } from "react-icons/bs";
import { BiPlusCircle } from "react-icons/bi";
import { MdAttachFile } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import "./maindashboard.css";
import Image from "next/image";

const MainDashboard = () => {
  return (
    <div className="main-container">
      <div>
        <Profile />
      </div>
      <div className="dashboard">
        <div className="dashboard-nav">
          <div className="tabs">
            <div className="dashboard-icons">{<VscTasklist />}</div>
            <div className="dashboard-icons-name">Lists Tasks</div>
          </div>

          <div className="tabs">
            <div className="dashboard-icons">{<MdDashboard />}</div>
            <div className="dashboard-icons-name">Boards</div>
          </div>

          <div className="tabs">
            <div className="dashboard-icons">{<SlCalender />}</div>
            <div className="dashboard-icons-name">Calender</div>
          </div>

          <div className="tabs">
            <div className="dashboard-icons">{<AiOutlineAlignLeft />}</div>
            <div className="dashboard-icons-name">Gantt</div>
          </div>

          <div className="tabs">
            <div className="dashboard-icons">{<GiHamburgerMenu />}</div>
            <div className="dashboard-icons-name">Timeline</div>
          </div>

          <div className="tabs">
            <div className="dashboard-icons">{<TfiStatsUp />}</div>
            <div className="dashboard-icons-name">Activity</div>
          </div>
        </div>

        <div className="main-content">
          <div className="todos-container">
            <div className="todos" style={{borderLeft:'3px solid #7E57C2'}}>
              <div style={{ color: "black", fontWeight: "500" }}>TODOS</div>
              <div>
                <button>S</button>
              </div>
              <div>{<BsThreeDots />}</div>
              <div>{<BiPlusCircle />}</div>
            </div>

            <div className="todos" style={{borderLeft:'3px solid #4FC3F7'}}>
              <div style={{ color: "black", fontWeight: "500" }}>IN WORK</div>
              <div>
                <button>S</button>
              </div>
              <div>{<BsThreeDots />}</div>
              <div>{<BiPlusCircle />}</div>
            </div>

            <div className="todos" style={{borderLeft:'3px solid yellow'}}>
              <div style={{ color: "black", fontWeight: "500" }}>REVIEW</div>
              <div>
                <button>S</button>
              </div>
              <div>{<BsThreeDots />}</div>
              <div>{<BiPlusCircle />}</div>
            </div>

            <div className="todos" style={{borderLeft:'3px solid green'}}>
              <div style={{ color: "black", fontWeight: "500" }}>DONE</div>
              <div>
                <button>S</button>
              </div>
              <div>{<BsThreeDots />}</div>
              <div>{<BiPlusCircle />}</div>
            </div>
          </div>

          <div className="task-list">

            {/* First Row */}
            <div>
                <div>
                  <Image
                    src="/task1.jpg"
                    height={"200"}
                    width={"220"}
                    alt="image"
                  />
                  <div className="task-cont">
                    <div
                      style={{
                        display: "flex",
                        paddingRight: "10px",
                        justifyContent: "space-between",
                        paddingTop: "15px",
                      }}
                    >
                      <div className="title">Space Task 2</div>
                      <div>
                        <Image
                          src="/avatar4.png"
                          height={"20"}
                          width={"20"}
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="desc">Make Online Through</div>
                    <div
                      style={{
                        display: "flex",
                        color: "#C3CAD9",
                        justifyContent: "space-around",
                        fontSize: "14px",
                        marginTop: "20px",
                        marginBottom: "30px",
                      }}
                    >
                      <div className="flex">
                        <div className=" mr-1 mt-1">{<BsListTask />}</div>
                        <div style={{ fontSize: "13px" }}>2</div>
                      </div>

                      <div className="flex">
                        <div className="mr-1 mt-1">{<MdAttachFile />}</div>
                        <div style={{ fontSize: "13px" }}>4</div>
                      </div>

                      <div className="flex">
                        <div className=" mr-1 mt-1">{<LuAlarmClock />}</div>
                        <div style={{ fontSize: "13px" }}>6 Days left</div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Short Snippets */}
                <div className="task-cont mt-5 rounded-md">
              <div
                style={{
                  display: "flex",
                  paddingRight: "10px",
                  justifyContent: "space-between",
                  paddingTop: "15px",
                }}
              >
                <div className="title">Space Task 2</div>
                <div>
                  <Image
                    src="/avatar4.png"
                    height={"20"}
                    width={"20"}
                    alt="image"
                  />
                </div>
              </div>
              <div className="desc">Make Online Through</div>
            </div>

            <div className="task-cont mt-5 rounded-md">
              <div
                style={{
                  display: "flex",
                  paddingRight: "10px",
                  justifyContent: "space-between",
                  paddingTop: "15px",
                }}
              >
                <div className="title">Space Task 2</div>
                <div>
                  <Image
                    src="/avatar4.png"
                    height={"20"}
                    width={"20"}
                    alt="image"
                  />
                </div>
              </div>
              <div className="desc">Search Engine Optimisation</div>
            </div>

            <div className="task-cont mt-5 rounded-md">
              <div
                style={{
                  display: "flex",
                  paddingRight: "10px",
                  justifyContent: "space-between",
                  paddingTop: "15px",
                }}
              >
                <div className="title">Space Task 2</div>
                <div>
                  <Image
                    src="/avatar4.png"
                    height={"20"}
                    width={"20"}
                    alt="image"
                  />
                </div>
              </div>
              <div className="desc">Charactersticts of Successfull</div>
            </div>

            <div className="task-cont mt-5 rounded-md">
              <div
                style={{
                  display: "flex",
                  paddingRight: "10px",
                  justifyContent: "space-between",
                  paddingTop: "15px",
                }}
              >
                <div className="title">Space Task 2</div>
                <div>
                  <Image
                    src="/avatar4.png"
                    height={"20"}
                    width={"20"}
                    alt="image"
                  />
                </div>
              </div>
              <div className="desc">Importance of Custom</div>
            </div>
            </div>



            {/* Second Row */}
            <div>
              <div className="task-cont mt-5 rounded-md mb-2">
                <div
                  style={{
                    display: "flex",
                    paddingRight: "10px",
                    justifyContent: "space-between",
                    paddingTop: "15px",
                  }}
                >
                  <div className="title">Space Task 3</div>
                  <div>
                    <Image
                      src="/avatar4.png"
                      height={"20"}
                      width={"20"}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="desc">Types of Paper in Catalog</div>
              </div>

              {/* Long Poster */}

              <div>
                  <Image
                    src="/task2.jpg"
                    height={"200"}
                    width={"220"}
                    alt="image"
                  />
                  <div className="task-cont">
                    <div
                      style={{
                        display: "flex",
                        paddingRight: "10px",
                        justifyContent: "space-between",
                        paddingTop: "15px",
                      }}
                    >
                      <div className="title">Space Task 2</div>
                      <div>
                        <Image
                          src="/avatar4.png"
                          height={"20"}
                          width={"20"}
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="desc">Globe Resort Network</div>
                    <div
                      style={{
                        display: "flex",
                        color: "#C3CAD9",
                        justifyContent: "space-around",
                        fontSize: "14px",
                        marginTop: "20px",
                        marginBottom: "30px",
                      }}
                    >
                      <div className="flex">
                        <div className=" mr-1 mt-1">{<BsListTask />}</div>
                        <div style={{ fontSize: "13px" }}>2</div>
                      </div>

                      <div className="flex">
                        <div className="mr-1 mt-1">{<MdAttachFile />}</div>
                        <div style={{ fontSize: "13px" }}>4</div>
                      </div>

                      <div className="flex">
                        <div className=" mr-1 mt-1">{<LuAlarmClock />}</div>
                        <div style={{ fontSize: "13px" }}>6 Days left</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="task-cont mt-5 rounded-md">
                <div
                  style={{
                    display: "flex",
                    paddingRight: "10px",
                    justifyContent: "space-between",
                    paddingTop: "15px",
                  }}
                >
                  <div className="title">Space Task 3</div>
                  <div>
                    <Image
                      src="/avatar4.png"
                      height={"20"}
                      width={"20"}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="desc">Development Apps</div>
              </div>

              <div className="task-cont mt-5 rounded-md">
                <div
                  style={{
                    display: "flex",
                    paddingRight: "10px",
                    justifyContent: "space-between",
                    paddingTop: "15px",
                  }}
                >
                  <div className="title">Space Task 3</div>
                  <div>
                    <Image
                      src="/avatar4.png"
                      height={"20"}
                      width={"20"}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="desc">Copper COnyo</div>
              </div>




            </div>



            {/* Third Row */}
            <div>
              <div className="task-cont mt-5 rounded-md">
                <div
                  style={{
                    display: "flex",
                    paddingRight: "10px",
                    justifyContent: "space-between",
                    paddingTop: "15px",
                  }}
                >
                  <div className="title">Space Task 3</div>
                  <div>
                    <Image
                      src="/avatar4.png"
                      height={"20"}
                      width={"20"}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="desc">Astronomy Or Astrology</div>
              </div>

              <div className="task-cont mt-5 rounded-md">
                <div
                  style={{
                    display: "flex",
                    paddingRight: "10px",
                    justifyContent: "space-between",
                    paddingTop: "15px",
                  }}
                >
                  <div className="title">Space Task 3</div>
                  <div>
                    <Image
                      src="/avatar4.png"
                      height={"20"}
                      width={"20"}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="desc">Astronomy Binoculor A Great</div>
              </div>


            </div>




            {/* Fourth Row */}
            <div>
              <div className="task-cont mt-5 rounded-md">
                <div
                  style={{
                    display: "flex",
                    paddingRight: "10px",
                    justifyContent: "space-between",
                    paddingTop: "15px",
                  }}
                >
                  <div className="title">Space Task 3</div>
                  <div>
                    <Image
                      src="/avatar4.png"
                      height={"20"}
                      width={"20"}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="desc">Copper Canyon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
