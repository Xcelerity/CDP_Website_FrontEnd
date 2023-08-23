import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import styles from "../style";

export default function EventCard({
  img,
  eventName,
  eventDescription,
  venue,
  register,
  company,
}) {
  return (
    <>
      <Card className="m-5 md:m-10 w-[475px] h-[600px] md:h-[500px] bg-black-gradient-2 text-white">
        {/* <CardHeader
          color="#EC8558"
          className="relative h-56 w-[300px] self-center"
        >
          <img src={img} alt="img-blur-shadow" className="h-full w-full" />
        </CardHeader> */}
        <div className="flex flex-row w-full justify-evenly items-center mt-4">
          <img src={company} alt="img-blur-shadow" className="h-[65px] mb-5" />
          {/* <Typography>Company Name</Typography> */}
        </div>
        <CardBody className="text-center h-[410px] mb-5 flex flex-col justify-between">
          <div>
            <Typography variant="h5" className="mb-2">
              {eventName}
            </Typography>
            <Typography className=" h-[70px]">{eventDescription}</Typography>
          </div>
          <a
            href={register}
            target="_blank"
            rel="noreferrer"
            className={`py-2 px-2 font-poppins font-medium text-[15px] rounded-[10px] outline-none mt-4 `}
            style={{ backgroundColor: "#EC8558" }}
          >
            Register
          </a>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <div className="flex h-full justify-between flex-col items-center">
            <img src="location.png" />
            <p className="inline text-center">{venue.place}</p>
          </div>
          <div className="flex flex-col  h-full justify-between items-center">
            <img src="clock.png" />
            <p className="inline text-center">{venue.time}</p>
          </div>
          <div className="flex flex-col  h-full justify-between items-center">
            <img src="calendar.png" />
            <p className="inline text-center">{venue.date}</p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
