import React from "react";

function HappyBanner({ count }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{count === 1 ? "1 guess" : `${count} guesses`}</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Banner({ wonWith, gameover, answer }) {
  if (!!wonWith) {
    return <HappyBanner count={wonWith} />;
  } else if (gameover) {
    return <SadBanner answer={answer} />;
  }
  return;
}

export default Banner;
