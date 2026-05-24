"use client";

import { Button, Modal } from "@heroui/react";
import React from "react";

export default function DetailModal({ isOpen, onClose, data }) {
  if (!isOpen || !data) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
      size="lg"
      backdrop="blur"
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <Modal.Backdrop variant="blur">
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[800px] bg-white rounded-xl shadow-xl p-6">
            <Modal.CloseTrigger onClick={onClose} />

            <Modal.Header>
              <Modal.Heading className="text-2xl font-bold text-gray-800">
                {data.title}
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 shadow-sm">
                <img
                  src={data.imageUrl}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-4 text-sm mb-3 text-gray-500 font-medium">
                <span>📍 {data.location}</span>
                <span className="text-amber-500">⭐ {data.rating}</span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                {data.desc}
              </p>

              {data.content && (
                <div className="mt-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  {data.content}
                </div>
              )}
            </Modal.Body>

            <Modal.Footer className="flex justify-end gap-2 pt-4">
              {/* 
                Berikan footer dibagian ini
                */}
              {/* <Button variant="secondary" onClick={onClose}>
                Tutup
              </Button>
              <Button
                as="a"
                href={data.linkDetail}
                target="_blank"
                className="bg-amber-500 text-white font-medium"
              >
                Kunjungi Website
              </Button> */}
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
