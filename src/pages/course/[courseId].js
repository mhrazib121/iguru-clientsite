"use client";
import CommonTopBanner from "@/Components/CommonTopBanner/CommonTopBanner";
import useSingleData from "@/Hooks/useSingleData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Banner from "../../assets/page-common.jpg";

const Page = () => {
  const router = useRouter();
  const { data } = useSingleData(router.query?.courseId);
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState("");
  const [isShow, setIsShow] = useState(false);

  const { id, logo, name, questions, total } = data;

  useEffect(() => {
    setQuestion(questions ? questions[0] : {});
  }, [questions]);

  const previousHandler = () => {
    if (indexOfQuestion > 0) {
      setIndexOfQuestion(indexOfQuestion - 1);
      setQuestion(questions ? questions[indexOfQuestion - 1] : {});
    }
  };
  const nextHandler = () => {
    if (indexOfQuestion < questions.length - 1) {
      setIndexOfQuestion(indexOfQuestion + 1);
      setQuestion(questions ? questions[indexOfQuestion + 1] : {});
    }
  };
  return (
    <>
      <CommonTopBanner bgCommonImg={Banner} title="Course Quiz" />
      <br />
      <div className="bg-slate-300 w-2/4 p-12 rounded-md m-auto">
        <div className="flex flex-col items-end">
          <p className=" mb-8 text-md font-normal">
            Question {indexOfQuestion + 1} out of {total}
          </p>
          {!isShow ? (
            <AiOutlineEyeInvisible
              className="text-3xl cursor-pointer"
              onClick={() => setIsShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="text-3xl cursor-pointer"
              onClick={() => setIsShow(false)}
            />
          )}
        </div>

        {questions?.map((data) => (
          <>
            {question === data && (
              <>
                <h1 className="text-3xl font-semibold mb-4">{data.question}</h1>
                <ul>
                  {data.options?.map((p) => (
                    <>
                      <div className="flex gap-3 mb-2 items-center">
                        <div
                          className={`border-2 w-[18px] h-[18px] cursor-pointer ${
                            answer === p || (isShow && data.correctAnswer === p)
                              ? "bg-blue-400"
                              : null
                          }`}
                          onClick={() => setAnswer(p)}
                        ></div>
                        <p className="text-xl font-semibold">{p}</p>
                      </div>
                    </>
                  ))}
                </ul>
              </>
            )}
          </>
        ))}
        <br />
        <div className="flex gap-4 justify-center">
          <button
            className="bg-gray-600 px-4 py-2 h-[40px] rounded-lg text-slate-50"
            onClick={() => previousHandler()}
          >
            Previous
          </button>
          <button
            className="bg-gray-600 px-4 py-2 h-[40px] rounded-lg text-slate-50"
            onClick={() => nextHandler()}
          >
            Next
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default Page;
