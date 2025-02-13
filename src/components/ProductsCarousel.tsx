import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProductsCarousel() {
  return (
    <Carousel className="m-auto h-fit w-10/12">
      <CarouselContent className="-ml-2 flex-row-reverse md:-ml-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3 pl-10 md:pl-10">
            <div className="p-1">{/* <Card /> */}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
