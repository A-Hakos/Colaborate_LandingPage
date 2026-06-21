import {
  CardHeader,
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Link,
} from "@heroui/react";
import { useState } from "react";
import DetailModal from "../../CoffeeCardRecommended/DetailModal";

export default function CardGeneral({
  title,
  desc,
  content,
  location,
  rating,
  linkDetail,
  imageUrl,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Card className="w-90 md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] p-4 mb-6 shadow-md rounded-xl h-full flex flex-col justify-between mx-3 bg-white border border-gray-100">
        {" "}
        <div className="flex-1">
          <CardHeader className="p-0 mb-3 overflow-hidden rounded-lg w-full aspect-video">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </CardHeader>
          <div className="px-1">
            <CardTitle className="text-xl font-bold line-clamp-1 mb-1">
              {title}
            </CardTitle>

            {/* Efek titik-titik (...) otomatis jika deskripsi terlalu panjang */}
            <CardDescription className="text-gray-500 text-sm mb-4 line-clamp-2 min-h-[40px]">
              {desc}
            </CardDescription>
            {content && (
              <CardContent className="p-0 text-sm mb-4 text-gray-600">
                {content}
              </CardContent>
            )}
          </div>
        </div>
        {/* CARD FOOTER: Selalu terkunci di paling bawah karena flex-col pada Card */}
        <CardFooter className="p-0 pt-4 border-t border-gray-100 flex justify-between items-center text-sm mt-auto">
          <div className="flex flex-col text-gray-500">
            <span>📍 {location}</span>
            <span className="text-amber-500 font-medium">⭐ {rating}</span>
          </div>

          {/* Menggunakan sintaks link HeroUI standar */}
          <Link
            showAnchorIcon
            color="amber"
            className="text-sm font-semibold cursor-pointer" // Tambahkan cursor-pointer agar terlihat bisa diklik
            onPress={() => setIsModalOpen(true)} // Ini sudah benar memicu state
          >
            Detail
          </Link>
        </CardFooter>
      </Card>
      {isModalOpen && (
        <DetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={{
            title,
            desc,
            content,
            location,
            rating,
            linkDetail,
            imageUrl,
          }}
        />
      )}
    </>
  );
}
