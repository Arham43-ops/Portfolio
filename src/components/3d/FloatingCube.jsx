import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const FloatingLaptop = () => {
    const groupRef = useRef();
    const screenRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (groupRef.current) {
            // Get mouse position (normalized to -1 to 1)
            const mouseX = state.mouse.x;
            const mouseY = state.mouse.y;

            // Calculate target rotation based on mouse position
            const targetRotationY = -mouseX * 0.3;
            const targetRotationX = 0.15 + mouseY * 0.2;

            // Smooth interpolation (lerp) for natural movement
            groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
            groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;

            // Gentle floating motion
            groupRef.current.position.y = Math.sin(time * 0.6) * 0.1;
        }

        // Subtle screen glow pulse
        if (screenRef.current) {
            screenRef.current.material.emissiveIntensity = 0.4 + Math.sin(time * 1.5) * 0.1;
        }
    });

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {/* ===== LAPTOP BASE (KEYBOARD) ===== */}
            <group position={[0, 0, 0]}>
                {/* Base platform */}
                <mesh position={[0, 0, 0.4]} rotation={[-0.05, 0, 0]}>
                    <boxGeometry args={[3, 0.08, 2]} />
                    <meshStandardMaterial
                        color="#1a1f2e"
                        metalness={0.7}
                        roughness={0.2}
                    />
                </mesh>

                {/* Keyboard area */}
                <mesh position={[0, 0.05, 0.2]} rotation={[-0.05, 0, 0]}>
                    <boxGeometry args={[2.6, 0.02, 1.4]} />
                    <meshStandardMaterial color="#0f1419" />
                </mesh>

                {/* Trackpad */}
                <mesh position={[0, 0.05, 1]} rotation={[-0.05, 0, 0]}>
                    <boxGeometry args={[1, 0.02, 0.6]} />
                    <meshStandardMaterial color="#1e293b" metalness={0.5} />
                </mesh>
            </group>

            {/* ===== LAPTOP SCREEN ===== */}
            <group position={[0, 0, -0.6]}>
                {/* Screen back */}
                <mesh position={[0, 1.1, 0]}>
                    <boxGeometry args={[3, 1.8, 0.06]} />
                    <meshStandardMaterial
                        color="#0f1419"
                        metalness={0.8}
                        roughness={0.2}
                    />
                </mesh>

                {/* Screen bezel */}
                <mesh position={[0, 1.1, 0.04]}>
                    <boxGeometry args={[2.9, 1.7, 0.02]} />
                    <meshStandardMaterial color="#000000" />
                </mesh>

                {/* Active screen display */}
                <mesh position={[0, 1.1, 0.05]} ref={screenRef}>
                    <planeGeometry args={[2.7, 1.5]} />
                    <meshStandardMaterial
                        color="#0a0e1a"
                        emissive="#4f46e5"
                        emissiveIntensity={0.4}
                    />
                </mesh>

                {/* Menu bar */}
                <mesh position={[0, 1.82, 0.06]}>
                    <planeGeometry args={[2.7, 0.12]} />
                    <meshBasicMaterial color="#1e1b4b" />
                </mesh>

                {/* Window control dots */}
                <mesh position={[-1.2, 1.82, 0.07]}>
                    <circleGeometry args={[0.03, 16]} />
                    <meshBasicMaterial color="#ef4444" />
                </mesh>
                <mesh position={[-1.1, 1.82, 0.07]}>
                    <circleGeometry args={[0.03, 16]} />
                    <meshBasicMaterial color="#f59e0b" />
                </mesh>
                <mesh position={[-1.0, 1.82, 0.07]}>
                    <circleGeometry args={[0.03, 16]} />
                    <meshBasicMaterial color="#10b981" />
                </mesh>

                {/* Code on screen - actual code structure */}
                {/* Line 1: // Welcome */}
                <mesh position={[-1.15, 1.55, 0.06]}>
                    <planeGeometry args={[0.08, 0.04]} />
                    <meshBasicMaterial color="#64748b" />
                </mesh>
                <mesh position={[-1.0, 1.55, 0.06]}>
                    <planeGeometry args={[0.08, 0.04]} />
                    <meshBasicMaterial color="#64748b" />
                </mesh>
                <mesh position={[-0.7, 1.55, 0.06]}>
                    <planeGeometry args={[1.0, 0.04]} />
                    <meshBasicMaterial color="#64748b" />
                </mesh>

                {/* Line 2: const dev = { */}
                <mesh position={[-1.1, 1.4, 0.06]}>
                    <planeGeometry args={[0.35, 0.04]} />
                    <meshBasicMaterial color="#8b5cf6" />
                </mesh>
                <mesh position={[-0.5, 1.4, 0.06]}>
                    <planeGeometry args={[0.7, 0.04]} />
                    <meshBasicMaterial color="#e2e8f0" />
                </mesh>

                {/* Line 3:   name: "..." */}
                <mesh position={[-0.9, 1.25, 0.06]}>
                    <planeGeometry args={[0.3, 0.04]} />
                    <meshBasicMaterial color="#e2e8f0" />
                </mesh>
                <mesh position={[-0.4, 1.25, 0.06]}>
                    <planeGeometry args={[0.8, 0.04]} />
                    <meshBasicMaterial color="#10b981" />
                </mesh>

                {/* Line 4:   skills: [...] */}
                <mesh position={[-0.9, 1.1, 0.06]}>
                    <planeGeometry args={[0.4, 0.04]} />
                    <meshBasicMaterial color="#e2e8f0" />
                </mesh>
                <mesh position={[-0.2, 1.1, 0.06]}>
                    <planeGeometry args={[1.2, 0.04]} />
                    <meshBasicMaterial color="#10b981" />
                </mesh>

                {/* Line 5:   passion: "..." */}
                <mesh position={[-0.9, 0.95, 0.06]}>
                    <planeGeometry args={[0.5, 0.04]} />
                    <meshBasicMaterial color="#e2e8f0" />
                </mesh>
                <mesh position={[-0.1, 0.95, 0.06]}>
                    <planeGeometry args={[0.9, 0.04]} />
                    <meshBasicMaterial color="#10b981" />
                </mesh>

                {/* Line 6: }; */}
                <mesh position={[-1.2, 0.8, 0.06]}>
                    <planeGeometry args={[0.1, 0.04]} />
                    <meshBasicMaterial color="#e2e8f0" />
                </mesh>

                {/* Line 7: function create() */}
                <mesh position={[-1.0, 0.65, 0.06]}>
                    <planeGeometry args={[0.5, 0.04]} />
                    <meshBasicMaterial color="#8b5cf6" />
                </mesh>
                <mesh position={[-0.3, 0.65, 0.06]}>
                    <planeGeometry args={[0.6, 0.04]} />
                    <meshBasicMaterial color="#f59e0b" />
                </mesh>

                {/* Line 8:   return amazing */}
                <mesh position={[-0.9, 0.5, 0.06]}>
                    <planeGeometry args={[0.4, 0.04]} />
                    <meshBasicMaterial color="#8b5cf6" />
                </mesh>
                <mesh position={[-0.3, 0.5, 0.06]}>
                    <planeGeometry args={[0.6, 0.04]} />
                    <meshBasicMaterial color="#e2e8f0" />
                </mesh>

                {/* Cursor */}
                <mesh position={[0.5, 0.5, 0.06]}>
                    <planeGeometry args={[0.04, 0.08]} />
                    <meshBasicMaterial color="#6366f1" />
                </mesh>

                {/* Screen glow effect */}
                <pointLight position={[0, 1.1, 0.5]} intensity={0.5} color="#6366f1" distance={2} />
            </group>

            {/* ===== HINGE ===== */}
            <mesh position={[0, 0.04, -0.6]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.04, 0.04, 3, 16]} />
                <meshStandardMaterial color="#0f1419" metalness={0.9} />
            </mesh>

            {/* ===== DECORATIVE ELEMENTS ===== */}
            {/* Floating particles */}
            {Array.from({ length: 15 }).map((_, i) => {
                const angle = (i / 15) * Math.PI * 2;
                const radius = 2.5;
                return (
                    <mesh
                        key={i}
                        position={[
                            Math.cos(angle) * radius,
                            Math.sin(angle * 2) * 0.5 + 1,
                            Math.sin(angle) * radius,
                        ]}
                    >
                        <sphereGeometry args={[0.02, 8, 8]} />
                        <meshBasicMaterial color="#6366f1" transparent opacity={0.4} />
                    </mesh>
                );
            })}

            {/* Code symbol on right - X shape */}
            <group position={[2.2, 1.2, 0.5]}>
                <mesh rotation={[0, 0, Math.PI / 4]}>
                    <boxGeometry args={[0.3, 0.05, 0.05]} />
                    <meshBasicMaterial color="#8b5cf6" />
                </mesh>
                <mesh rotation={[0, 0, -Math.PI / 4]}>
                    <boxGeometry args={[0.3, 0.05, 0.05]} />
                    <meshBasicMaterial color="#8b5cf6" />
                </mesh>
            </group>
        </group>
    );
};

export default FloatingLaptop;
