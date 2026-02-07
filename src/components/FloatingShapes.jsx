"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Geometries() {
    const mesh1 = useRef(null);
    const mesh2 = useRef(null);
    const mesh3 = useRef(null);

    useFrame((state) => {
        if (!mesh1.current || !mesh2.current || !mesh3.current) return;

        const t = state.clock.elapsedTime;

        // Smooth, organic rotation
        mesh1.current.rotation.x = Math.cos(t / 4) / 2;
        mesh1.current.rotation.y = Math.sin(t / 4) / 2;
        mesh1.current.position.y = Math.sin(t / 1.5) / 5;

        mesh2.current.rotation.x = Math.cos(t / 5) / 2;
        mesh2.current.rotation.y = Math.sin(t / 5) / 2;

        mesh3.current.rotation.z = t / 10;
    });

    // Material setup - glass/premium look
    const material = new THREE.MeshPhysicalMaterial({
        color: "#05e700",
        roughness: 0.2,
        metalness: 0.1,
        transmission: 0.2, // glass-like
        thickness: 2,
        clearcoat: 1,
    });

    const whiteMat = new THREE.MeshPhysicalMaterial({
        color: "#ffffff",
        roughness: 0.1,
        metalness: 0.1,
        clearcoat: 1,
    });

    return (
        <group>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                <mesh ref={mesh1} position={[3, 1, -5]} scale={1.5}>
                    <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                    <primitive object={material} />
                </mesh>
            </Float>

            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh ref={mesh2} position={[-4, -2, -8]} scale={2}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <primitive object={whiteMat} />
                </mesh>
            </Float>

            <Float speed={1} rotationIntensity={0.5} floatIntensity={0.8}>
                <mesh ref={mesh3} position={[4, -3, -4]} scale={0.8}>
                    <icosahedronGeometry />
                    <primitive object={material} />
                </mesh>
            </Float>
        </group>
    );
}

export default function FloatingShapes() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 0, 10], fov: 40 }} dpr={[1, 2]}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#09d44aff" />
                <Environment preset="city" />
                <Geometries />
            </Canvas>
        </div>
    );
}
