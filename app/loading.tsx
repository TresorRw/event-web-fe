import Container from "@/components/ui/container";
import Image from "next/image";

const LoadingUI = () => {
  return (
    <Container>
      <div className="w-full p-4 h-96 flex justify-center items-center">
        <Image
          unoptimized
          src={"/loading.gif"}
          width={100}
          height={100}
          alt="Loading GIF"
        />
      </div>
    </Container>
  );
};

export default LoadingUI;
