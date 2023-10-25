import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    const random = Math.random();
    setLoading(true);
    try {
      console.log(data)
      const response = await fetch('https://script.google.com/macros/s/AKfycbwVNZRX7Eu6klYrcbGOL1oL930mVX6cqQpqwJI9hjUdHtH0dJypwFJli8nicfw6Q1UR7A/exec', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      console.log(response)

      if (response.ok) {
        setResponse({
          type: 'success',
          message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
        })
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
