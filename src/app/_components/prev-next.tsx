import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    prevTitle?: string;
    prevMessage?: string;
    prevUrl?: string;

    nextTitle?: string;
    nextMessage?: string;
    nextUrl?: string;
};

export function PrevNext(props : Props) {
  return (
    <div className="container mx-auto px-4 my-8">
          <div className="flex justify-between items-center">
            {props.prevUrl ? (
              <Link 
                href={`${props.prevUrl}`}
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
              >
                <FontAwesomeIcon 
                  icon={faArrowLeft} 
                  height="20" 
                  className="inline-flex" 
                />
                <div>
                  <div className="text-sm text-left text-gray-500">{"Previous"}</div>
                  <div className="font-medium">{props.prevTitle}</div>
                </div>
              </Link>
            ) : (
              <div /> 
            )}

            {props.nextUrl ? (
              <Link 
                href={`${props.nextUrl}`}
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
              >
                <div className="text-right">
                  <div className="text-sm text-gray-500">{"Next"}</div>
                  <div className="font-medium">{props.nextTitle}</div>
                </div>
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  height="20" 
                  className="inline-flex" 
                />
              </Link>
            ) : (
              <div /> 
            )}
          </div>
        </div>
  );
}
