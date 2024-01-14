import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
  /**Sử dụng PureComponent để tự động thực hiện kiểm tra nếu props hoặc state đã thay đổi để render lại. */
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;

    return (
      // Đồ thị
      <SparklineComponent
        /**Một component được sử dụng để vẽ biểu đồ Sparkline. */
        id={id}
        height={height}
        width={width}
        lineWidth={1} //Đặt độ rộng của đường line trong Sparkline.
        valueType="Numeric" //Xác định kiểu giá trị trên trục y là số.
        fill={color}
        border={{ color: currentColor, width: 2 }} //Đặt thuộc tính cho đường viền của Sparkline, bao gồm màu và độ rộng.
        tooltipSettings={{
          visible: true, //Cho phép hiển thị tooltip.
          format: '${x} : Dữ liệu ${yval}', //Định dạng nội dung của tooltip với các giá trị x và yval.
          trackLineSettings: {
            visible: true,
          },
          /**Hiển thị đường dẫn theo dõi (track line) khi di chuột qua Sparkline. */
        }}
        markerSettings={{
          visible: ['All'], //Hiển thị tất cả các markers.
          size: 2.5, //Kích thước của marker.
          fill: currentColor //Màu sắc của marker.
        }}
        dataSource={data} //Dữ liệu để vẽ Sparkline, được chuyển vào qua props data.
        xName="x" //Chỉ định tên thuộc tính trong dữ liệu (được truyền qua data props) để sử dụng cho trục x.
        yName="yval" //Chỉ định tên thuộc tính trong dữ liệu để sử dụng cho trục y.
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;