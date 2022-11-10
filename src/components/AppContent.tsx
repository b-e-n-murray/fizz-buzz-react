import { useState } from "react";
import { isNumber } from "util";

export default function AppContent(): JSX.Element {
  const [numListFromCurrentRender, queueRerenderWithNextNuminSequence] =
    useState<(number | string)[]>([0]);

  const handleNext = () => {
    if (numListFromCurrentRender[numListFromCurrentRender.length - 1] ===  2) {
      queueRerenderWithNextNuminSequence([...numListFromCurrentRender, "Fizz"]);
    }
    if (numListFromCurrentRender[numListFromCurrentRender.length - 1] === 4) {
      queueRerenderWithNextNuminSequence([...numListFromCurrentRender, "Buzz"]);
    }
    if (numListFromCurrentRender[numListFromCurrentRender.length - 1] === 14) {
      queueRerenderWithNextNuminSequence([
        ...numListFromCurrentRender,
        "FizzBuzz"]);
    } else  {
            if(typeof(numListFromCurrentRender.length - 1) === 'string')  {
      queueRerenderWithNextNuminSequence(
        [...numListFromCurrentRender,
        numListFromCurrentRender[numListFromCurrentRender.length - 2] + 1
        ]);
    }
        else if(typeof(numListFromCurrentRender.length - 1) === 'number')  {
            queueRerenderWithNextNuminSequence(
                [...numListFromCurrentRender,
                numListFromCurrentRender[numListFromCurrentRender.length - 1] + 1
                ]);
        }
    }
  };

  return (
    <>
      <h3>Click the Next button to get the next number!</h3>
      <hr />
      <p>
        FizzBuzz List:{" "}
        {numListFromCurrentRender.map((number, i) => {
          return <ul key={i}>{number}</ul>;
        })}
      </p>
      <hr />
      <button onClick={handleNext}>Next</button>
    </>
  );
}
