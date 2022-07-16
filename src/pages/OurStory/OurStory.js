import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./OurStory.scss";
const OurStory = () => {
  return (
    <>
      <Navbar />
      <div className="our-story">
        <div className="our-story-content">
          <h1>Câu chuyện của chúng tôi</h1>
          <p>
            Thông qua webdev adventure, nhóm của chúng tôi "Cam on vi da den", đã
            luôn luôn tìm cách để giúp cho cộng đồng, thương người như thể
            thương thân tạo ra một nơi có thể chia sẻ không những về vật chất mà
            còn là cảm xúc tích cực, đem lại những nụ cười cho những hoàn cảnh
            mà ngày ngày nước mắt trào mi
          </p>
          <p>
            Hãy cùng tiếp nối với chúng tôi Không những làm việc thiện giúp tâm
            trạng của bạn tốt hơn mà ta còn được những phần thưởng của sự tử tế
          </p>
          <p>Cho đi và nhận lại</p>
          <p>
            Cho đi và nhận lại Chúng ta sống phụ thuộc vào nhau, làm ra sản phẩm
            để hỗ trợ cho nhau, cũng vì lẽ đó chúng tôi cúng ao ước một nơi mà
            bạn có thể chia sẻ được những sản phẩm mà người khác cần với mức giá
            tốt hơn thị trường
          </p>
          <p>Hãy sống để sẻ chia</p>
        </div>
      </div>
    </>
  );
};
export default OurStory;
