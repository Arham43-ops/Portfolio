import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Particle field component - Much more subtle
function ParticleField({ count = 150 }) {
    const points = useRef();
    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 100;
            positions[i3 + 1] = (Math.random() - 0.5) * 100;
            positions[i3 + 2] = (Math.random() - 0.5) * 50;
        }

        return positions;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (points.current) {
            // Very slow, gentle rotation
            points.current.rotation.x = time * 0.0002;
            points.current.rotation.y = time * 0.0003;
        }
    });

    return (
        <Points ref={points} positions={particlesPosition} stride={3}>
            <PointMaterial
                transparent
                color="#6366F1"
                size={0.8}
                sizeAttenuation={true}
                opacity={0.08}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

// Subtle connection lines between nearby particles - Very minimal
function ConnectionLines({ count = 150 }) {
    const linesRef = useRef();

    const { positions, indices } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const lineIndices = [];
        const maxDistance = 15;

        // Generate random positions
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 100;
            positions[i3 + 1] = (Math.random() - 0.5) * 100;
            positions[i3 + 2] = (Math.random() - 0.5) * 50;
        }

        // Find nearby particles and connect them
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (distance < maxDistance) {
                    lineIndices.push(i, j);
                }
            }
        }

        return { positions, indices: new Uint16Array(lineIndices) };
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (linesRef.current) {
            linesRef.current.rotation.x = time * 0.0002;
            linesRef.current.rotation.y = time * 0.0003;
        }
    });

    return (
        <lineSegments ref={linesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    count={indices.length}
                    array={indices}
                    itemSize={1}
                />
            </bufferGeometry>
            <lineBasicMaterial
                color="#6366F1"
                transparent
                opacity={0.01}
                blending={THREE.AdditiveBlending}
            />
        </lineSegments>
    );
}

// Main Background3D component
const Background3D = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -10,
                pointerEvents: 'none',
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 50], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.05} />
                <ParticleField count={150} />
                <ConnectionLines count={150} />
            </Canvas>
        </div>
    );
};

export default Background3D;
