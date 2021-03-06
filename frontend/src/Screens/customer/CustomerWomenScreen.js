import React from "react";
import "../../styles/components/category.css";
import Category from "../../Components/customer/Category";

function CategoryWomenScreen() {
  return (
    <div className="women__category">
      <Category
        category_image="images/Women/damssghunri.jpg"
        category_title="Women"
        sub_category_image_1="images/Women/damsanother.jpg"
        sub_category_title_1="Old Age Dhoti"
        sub_category_image_2="images/Women/sonamdidi.jpg"
        sub_category_title_2="Old Age Dhoti"
        sub_category_image_3="images/Men/Edited/rabin.jpg"
        sub_category_title_3="Old Age Dhoti"
        sub_category_image_4="images/Men/Edited/rabin.jpg"
        sub_category_title_4="Old Age Dhoti"
        sub_category_image_5="images/Men/Edited/rabin.jpg"
        sub_category_title_5="Old Age Dhoti"
        firstLink="/womenCategory"
        secondLink="/womenCategory"
        thirdLink="/womenCategory"
      ></Category>
    </div>
  );
}

export default CategoryWomenScreen;
