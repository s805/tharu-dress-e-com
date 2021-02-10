import React, { useEffect, useRef, useState } from "react";
import "./TailorOrder.css";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonIcon from "@material-ui/icons/Person";
function TailorOrder() {
  return (
    <div className="tailor__order">
      <div className="tailor__heading row no-gutters">
        <div className="tailor__heading__part1 col-lg-6 col-md-6 col-12">
          {" "}
          <h5>ORDERS</h5>
        </div>
        <div className="tailor__heading__part2 col-lg-4 col-md-5 col-12 justify-content-end">
          <div className="tailor__quick__search">
            <input
              type="text"
              placeholder="Quick search by id"
              className="tailor__quick__search__input"
            />
            <SearchIcon className="quick__search__icon"></SearchIcon>
          </div>
          <div className="tailor__status">
            <select name="" id="" className="tailor__status__options">
              <option value="Delivered">Delivered</option>
              <option value="Pending">Pending</option>
              <option value="Working">Working</option>
              <option selected value="Paid">
                Paid
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="tailor__orders">
        <table class="table order__table" id="orders__table">
          <thead>
            <tr>
              <th scope="col">Orders</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Customer</th>
              <th scope="col">Purchased</th>
              <th scope="col">Assigned To</th>
              <th scope="col">Total</th>
              <th scope="col">See more</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td> <td>{seeMoreFunction()}</td>
            </tr>

            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
          </tbody>
        </table>
        {/* <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" tabindex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link">1</a>
            </li>
            <li className="page-item">
              <a className="page-link">2</a>
            </li>
            <li className="page-item">
              <a className="page-link">3</a>
            </li>
            <li className="page-item">
              <a className="page-link">Next</a>
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
}
let seeMoreOptionsList = [
  { icon: <VisibilityIcon></VisibilityIcon>, iconText: "Order Details" },
  {
    icon: <AssignmentIndIcon></AssignmentIndIcon>,
    iconText: "Employee Details",
  },
  { icon: <PersonIcon></PersonIcon>, iconText: "Customer Details" },
  {
    icon: <LocalShippingIcon></LocalShippingIcon>,
    iconText: "Mark as delivered",
  },
  { icon: <CheckBoxIcon></CheckBoxIcon>, iconText: "Mark as paid" },
  { icon: <DescriptionIcon></DescriptionIcon>, iconText: "Send Invoice" },
];
const seeMoreFunction = () => {
  return <SeeMoreToogle theList={seeMoreOptionsList}></SeeMoreToogle>;
};
export function SeeMoreToogle({ theList }) {
  const [moreAction, setMoreAction] = useState(false);
  const hideMoreAction = () => {
    setMoreAction(!moreAction);
  };

  console.log("This is console log");
  // console.log(seeMoreOptions[1].props.theIcon);

  function SeeMoreIndividual({ theIcon, theIconText }) {
    return (
      <div className="see__more__individual__container">
        <div className="see__more__icon">{theIcon}</div>
        <div className="see__more__text">{theIconText}</div>
      </div>
    );
  }
  function SeeMoreContainer({ seeMoreRef }) {
    let seeMoreOptions = theList.map((obj) => {
      return (
        <SeeMoreIndividual
          key={obj.toString()}
          theIcon={obj.icon}
          theIconText={obj.iconText}
        >
          {" "}
        </SeeMoreIndividual>
      );
    });
    return (
      <div className="see__more__container" ref={seeMoreRef}>
        {seeMoreOptions}
      </div>
    );
  }
  const seeMoreRef = useRef(null);
  useEffect(() => {
    function hideSeeMore(event) {
      if (seeMoreRef.current && !seeMoreRef.current.contains(event.target)) {
        hideMoreAction();
      }
    }
    document.addEventListener("mousedown", hideSeeMore);
    return () => {
      document.removeEventListener("mousedown", hideSeeMore);
    };
  }, [moreAction, seeMoreRef]);
  return (
    <div className="see__more__data">
      <MoreHorizIcon
        className="more__horizon__icon"
        onClick={() => {
          setMoreAction(!moreAction);
        }}
      ></MoreHorizIcon>
      {moreAction && (
        <SeeMoreContainer seeMoreRef={seeMoreRef}></SeeMoreContainer>
      )}
    </div>
  );
}

export default TailorOrder;
