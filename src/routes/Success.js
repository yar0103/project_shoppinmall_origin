import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "../css/toss.css";

export function SuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // TODO: 쿼리 파라미터 값이 결제 요청할 때 보낸 데이터와 동일한지 반드시 확인하세요.
    // 클라이언트에서 결제 금액을 조작하는 행위를 방지할 수 있습니다.
    const requestData = {
      orderId: searchParams.get("orderId"),
      amount: searchParams.get("amount"),
      paymentKey: searchParams.get("paymentKey"),
    };

    console.log(requestData)

    const findRequest = async () => {
      const checkRequest = await fetch(`http://localhost:5000/paymentRequest?orderId=${requestData.orderId}&amount=${requestData.amount}&paymentKey=${requestData.paymentKey}`)
      const body = await checkRequest.json();
      return body;
    };


    async function confirm() {
      // console.log(findRequest())

      const arrayResponse = await findRequest();

      // 배열이 빈 배열인지 확인
      if (arrayResponse.length === 0) {
        console.error("Error: 배열이 비어 있습니다.");
        return;  // 배열이 비어 있을 때 동작 멈춤
      }

      console.log("결제 시도")

      const response = await fetch("http://localhost:5000/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const json = await response.json();

      if (!response.ok) {
        // TODO: 결제 실패 비즈니스 로직을 구현하세요.
        console.log(json);
        navigate(`/fail?message=${json.message}&code=${json.code}`);
        return;
      }

      // TODO: 결제 성공 비즈니스 로직을 구현하세요.
      console.log(json);
    }
    confirm();
  }, []);

  return (
    <div className="result wrapper">
      <div className="box_section">
        <h2 style={{ padding: "20px 0px 10px 0px" }}>
          <img
            width="35px"
            src="https://static.toss.im/3d-emojis/u1F389_apng.png"
          />
          결제 성공
        </h2>
        <p>{`주문번호: ${searchParams.get("orderId")}`}</p>
        <p>{`결제 금액: ${Number(
          searchParams.get("amount")
        ).toLocaleString()}원`}</p>
        <p>{`paymentKey: ${searchParams.get("paymentKey")}`}</p>
      </div>
    </div>
  );
}
