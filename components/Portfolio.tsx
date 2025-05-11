'use client';

import type React from 'react';

import { useState, useEffect, useRef } from 'react';
import {
  Code,
  Briefcase,
  Book,
  Award,
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  LineChart,
  Server,
  Cloud,
  Database,
  Terminal,
  Cpu,
  Wifi,
  Activity,
  HardDrive,
} from 'lucide-react';
import type { JSX } from 'react/jsx-runtime';

// Tipos
interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  bio: string;
  profileImage?: string;
  youtubeLink?: string;
}

interface Skill {
  name: string;
  icon: JSX.Element;
  logo?: string;
}

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  logo?: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  logo?: string;
}

interface Achievement {
  title: string;
  image?: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
}

interface IoTDevice {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'warning';
  type: string;
  lastPing: string;
  location: string;
  x: number;
  y: number;
}

interface SystemMetric {
  name: string;
  value: number;
  unit: string;
  icon: JSX.Element;
  history: number[];
}

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('terminal');
  const [activeExperienceId, setActiveExperienceId] = useState<number | null>(
    null,
  );
  const [terminalInput, setTerminalInput] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<
    { command: string; output: string }[]
  >([
    {
      command: 'system --status',
      output:
        'All systems operational. CPU: 12%, Memory: 3.2GB/16GB, Network: 42Mbps↓ 12Mbps↑',
    },
    {
      command: 'whoami',
      output:
        'Santiago José Barraza Sinning - Software Systems & Telematics Engineer',
    },
  ]);
  const [metrics, setMetrics] = useState<SystemMetric[]>([
    {
      name: 'CPU Usage',
      value: 12,
      unit: '%',
      icon: <Cpu size={16} />,
      history: [8, 15, 10, 13, 9, 12],
    },
    {
      name: 'Memory',
      value: 3.2,
      unit: 'GB',
      icon: <HardDrive size={16} />,
      history: [2.8, 3.5, 3.1, 2.9, 3.0, 3.2],
    },
    {
      name: 'Network',
      value: 42,
      unit: 'Mbps',
      icon: <Wifi size={16} />,
      history: [38, 45, 40, 42, 39, 42],
    },
    {
      name: 'Latency',
      value: 28,
      unit: 'ms',
      icon: <Activity size={16} />,
      history: [32, 25, 30, 27, 29, 28],
    },
  ]);

  useEffect(() => {
    setCurrentTime(new Date().toISOString());
    const interval = setInterval(() => {
      setCurrentTime(new Date().toISOString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [iotDevices, setIotDevices] = useState<IoTDevice[]>([
    {
      id: 'dev-001',
      name: 'Temperature Sensor',
      status: 'online',
      type: 'sensor',
      lastPing: '2s ago',
      location: 'Server Room',
      x: 20,
      y: 30,
    },
    {
      id: 'dev-002',
      name: 'Humidity Sensor',
      status: 'online',
      type: 'sensor',
      lastPing: '5s ago',
      location: 'Lab Area',
      x: 60,
      y: 40,
    },
    {
      id: 'dev-003',
      name: 'Motion Detector',
      status: 'warning',
      type: 'security',
      lastPing: '1m ago',
      location: 'Entry Point',
      x: 80,
      y: 70,
    },
    {
      id: 'dev-004',
      name: 'Gateway Node',
      status: 'online',
      type: 'network',
      lastPing: '1s ago',
      location: 'Central Hub',
      x: 50,
      y: 50,
    },
    {
      id: 'dev-005',
      name: 'Power Monitor',
      status: 'offline',
      type: 'utility',
      lastPing: '15m ago',
      location: 'Power Room',
      x: 30,
      y: 80,
    },
    {
      id: 'dev-006',
      name: 'Air Quality',
      status: 'online',
      type: 'sensor',
      lastPing: '3s ago',
      location: 'Work Area',
      x: 70,
      y: 20,
    },
    {
      id: 'dev-007',
      name: 'Backup System',
      status: 'online',
      type: 'security',
      lastPing: '7s ago',
      location: 'Server Room',
      x: 25,
      y: 35,
    },
    {
      id: 'dev-008',
      name: 'Light Controller',
      status: 'offline',
      type: 'utility',
      lastPing: '22m ago',
      location: 'Common Area',
      x: 85,
      y: 60,
    },
  ]);

  const terminalRef = useRef<HTMLDivElement>(null);

  const personalInfo: PersonalInfo = {
    name: 'Santiago José Barraza Sinning',
    title: 'Software Systems & Telematics Engineer',
    email: 'sjbs0212@gmail.com',
    linkedin: 'linkedin.com/in/santiagobarrazas',
    github: 'github.com/santiagobarrazas',
    location: 'Cali, Valle del Cauca, Colombia',
    bio: 'Dual major in Systems Engineering and Telematics Engineering with a strong commitment to technological project development and management. My focus is on problem-solving and continuous learning in engineering and technology, with a steadfast commitment to excellence in developing innovative solutions.',
    profileImage: '/images/profile.jpg',
    youtubeLink: 'https://www.youtube.com/embed/NHrgtUPH1QQ',
  };

  const skills: Skill[] = [
    {
      name: 'Backend Development',
      icon: <Server className="w-5 h-5" />,
      logo: '/images/skills/backend.png',
    },
    {
      name: 'Spring Boot',
      icon: <Code className="w-5 h-5" />,
      logo: '/images/skills/spring-boot.png',
    },
    {
      name: 'NestJS',
      icon: <Code className="w-5 h-5" />,
      logo: '/images/skills/nestjs.png',
    },
    {
      name: 'Python',
      icon: <Code className="w-5 h-5" />,
      logo: '/images/skills/python.png',
    },
    {
      name: 'Go',
      icon: <Code className="w-5 h-5" />,
      logo: '/images/skills/go.png',
    },
    {
      name: 'Kubernetes',
      icon: <Cloud className="w-5 h-5" />,
      logo: '/images/skills/kubernetes.png',
    },
    {
      name: 'AWS',
      icon: <Cloud className="w-5 h-5" />,
      logo: '/images/skills/aws.png',
    },
    {
      name: 'Azure',
      icon: <Cloud className="w-5 h-5" />,
      logo: '/images/skills/azure.png',
    },
    {
      name: 'Terraform',
      icon: <Database className="w-5 h-5" />,
      logo: '/images/skills/terraform.png',
    },
    {
      name: 'CI/CD',
      icon: <LineChart className="w-5 h-5" />,
      logo: '/images/skills/cicd.png',
    },
    {
      name: 'Machine Learning',
      icon: <LineChart className="w-5 h-5" />,
      logo: '/images/skills/ml.png',
    },
    {
      name: 'Competitive Programming',
      icon: <Code className="w-5 h-5" />,
      logo: '/images/skills/competitive.png',
    },
  ];

  const experiences: Experience[] = [
    {
      id: 1,
      role: 'Undergraduate Student Researcher',
      company: 'Grupo de Investigación i2t - Universidad Icesi',
      period: 'August 2024 - Present',
      description: [
        'Maintained C++ QT desktop application for skeleton data recolection through depth cameras with MoveNet, TensorflowLite and OpenCV.',
        'Developed Kotlin mobile app for data recolection from Arduino Nano 33 IoT through Bluetooth.',
        'Built an embedded system using Arduino Nano 33 IoT to transmit IMU data via Bluetooth Low Energy (BLE).',
      ],
      logo: '/images/companies/i2t.png',
    },
    {
      id: 2,
      role: 'Software Developer University Apprentice',
      company: 'TQ (Tecnoquímicas)',
      period: 'June 2024 - July 2024',
      description: [
        'Created an application to compare packaging PDFs of products from different countries using HTML, CSS, JavaScript, Python, Flask, and Azure OpenAI (GPT-4o vision model).',
        'Implemented RAG Architecture with chunking, embeddings, and GPT-4 (Azure OpenAI).',
        'Developed data prediction models using Regression, Random Forest, and XGBoost.',
      ],
      logo: '/images/companies/tq.jpg',
    },
    {
      id: 3,
      role: 'Competitive Programming Club Mentor',
      company: 'Universidad ICESI',
      period: 'February 2024 - Present',
      description: [
        'Trained and guided junior students for competitive programming contests.',
        'Focused on algorithm development, data structure implementation, and problem-solving techniques.',
      ],
      logo: '/images/companies/icesi.jpg',
    },
    {
      id: 4,
      role: 'Teaching Assistant - Telematics Engineering Capstone Project',
      company: 'Universidad ICESI',
      period: 'February 2024 - Present',
      description: [
        'Assisted students with backend (Spring Boot) and frontend development (HTML, CSS, JavaScript).',
        'Helped create CRUD systems with MySQL database.',
        'Managed data from WiFi-enabled microcontrollers connected to various sensors.',
      ],
      logo: '/images/companies/icesi.jpg',
    },
    {
      id: 5,
      role: 'Applied Mathematics Teaching Assistant',
      company: 'Universidad ICESI',
      period: 'January 2022 - Present',
      description: [
        'Supported students in solving numerical mathematics problems using Python.',
        'Utilized libraries like NumPy, SymPy, SciPy for numerical analysis.',
        'Helped with topics like double/triple integrals, linear transformations, eigenvectors, and more.',
      ],
      logo: '/images/companies/icesi.jpg',
    },
  ];

  const education: Education[] = [
    {
      degree: 'Systems Engineering',
      institution: 'Universidad ICESI',
      period: 'July 2022 - June 2026',
      logo: '/images/education/icesi.jpg',
    },
    {
      degree: 'Telematics Engineering',
      institution: 'Universidad ICESI',
      period: 'January 2021 - July 2026',
      logo: '/images/education/icesi.jpg',
    },
    {
      degree: 'Técnico en instalaciones eléctricas residenciales',
      institution: 'Servicio Nacional de Aprendizaje (SENA)',
      period: 'January 2019 - December 2020',
      logo: '/images/education/sena.png',
    },
    {
      degree: 'Técnico laboral por competencias en Auxiliar en Electrónica',
      institution: 'Corporación Universitaria Autónoma de Nariño - Cali',
      period: 'January 2018 - December 2020',
      logo: '/images/education/aunar.jpg',
    },
  ];

  const achievements: Achievement[] = [
    {
      title: '40th Place in ICPC Colombia 2023 National Programming Marathon',
      image: '/images/achievements/icpc-colombia.jpg',
    },
    {
      title:
        '17th Place in ICPC South America 2023 Regional Programming Marathon',
      image: '/images/achievements/icpc-southamerica.jpg',
    },
    {
      title: '1st category honorary scholarship',
      image: '/images/achievements/scholarship.jpg',
    },
  ];

  const projects: Project[] = [
    {
      title: 'Product Packaging PDF Comparator',
      description:
        'An application to automatically identify differences between product packaging PDFs from different countries.',
      technologies: ['Python', 'Flask', 'Azure OpenAI', 'GPT-4o'],
      image: '/images/projects/pdf-comparator.jpg',
    },
    {
      title: 'IoT Data Collection System',
      description:
        'Built an embedded system using Arduino Nano 33 IoT with Bluetooth Low Energy to transmit IMU sensor data.',
      technologies: ['Kotlin', 'Arduino', 'BLE', '3D Printing'],
      image: '/images/projects/iot-system.jpg',
    },
  ];

  const toggleExperience = (id: number) => {
    if (activeExperienceId === id) {
      setActiveExperienceId(null);
    } else {
      setActiveExperienceId(id);
    }
  };

  // Simulación de actualización de métricas
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prevMetrics) =>
        prevMetrics.map((metric) => {
          const newValue = Math.max(0, metric.value + (Math.random() * 6 - 3));
          return {
            ...metric,
            value: Number.parseFloat(newValue.toFixed(1)),
            history: [
              ...metric.history.slice(-5),
              Number.parseFloat(newValue.toFixed(1)),
            ],
          };
        }),
      );

      // Actualizar estado de dispositivos IoT aleatoriamente
      setIotDevices((prevDevices) => {
        if (Math.random() > 0.7) {
          const randomIndex = Math.floor(Math.random() * prevDevices.length);
          const statuses: ('online' | 'offline' | 'warning')[] = [
            'online',
            'offline',
            'warning',
          ];
          const newStatus =
            statuses[Math.floor(Math.random() * statuses.length)];

          return prevDevices.map((device, idx) =>
            idx === randomIndex
              ? {
                  ...device,
                  status: newStatus,
                  lastPing:
                    newStatus === 'online'
                      ? `${Math.floor(Math.random() * 10)}s ago`
                      : `${Math.floor(Math.random() * 30)}m ago`,
                }
              : device,
          );
        }
        return prevDevices;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Procesamiento de comandos de terminal
  const processCommand = (cmd: string) => {
    let output = '';
    const lowerCmd = cmd.toLowerCase().trim();

    if (lowerCmd === 'help' || lowerCmd === '--help') {
      output = `
Available commands:
  help                 Show this help message
  clear                Clear terminal history
  whoami               Display user information
  skills               List technical skills
  experience           Show work experience
  education            Show educational background
  achievements         List achievements and awards
  projects             Show projects
  system --status      Display system status
  ping [device-id]     Check device status
  deploy               Simulate deployment
  pitch                Display video pitch
  exit                 Exit terminal (switch to dashboard)
`;
    } else if (lowerCmd === 'clear') {
      setTerminalHistory([]);
      return;
    } else if (lowerCmd === 'whoami') {
      output = `${personalInfo.name} - ${personalInfo.title}\nLocation: ${personalInfo.location}\nEmail: ${personalInfo.email}\nGitHub: ${personalInfo.github}`;
    } else if (lowerCmd === 'skills') {
      output = skills.map((skill) => `- ${skill.name}`).join('\n');
    } else if (lowerCmd === 'experience') {
      output = experiences
        .map((exp) => `- ${exp.role} at ${exp.company} (${exp.period})`)
        .join('\n');
    } else if (lowerCmd === 'education') {
      output = education
        .map((edu) => `- ${edu.degree} at ${edu.institution} (${edu.period})`)
        .join('\n');
    } else if (lowerCmd === 'achievements') {
      output = achievements.map((ach) => `- ${ach.title}`).join('\n');
    } else if (lowerCmd === 'projects') {
      output = projects
        .map((proj) => `- ${proj.title}: ${proj.description}`)
        .join('\n');
    } else if (lowerCmd === 'system --status') {
      const cpuMetric = metrics.find((m) => m.name === 'CPU Usage');
      const memoryMetric = metrics.find((m) => m.name === 'Memory');
      const networkMetric = metrics.find((m) => m.name === 'Network');

      output = `All systems operational.\nCPU: ${cpuMetric?.value}%\nMemory: ${memoryMetric?.value}GB/16GB\nNetwork: ${networkMetric?.value}Mbps↓ ${Math.floor(networkMetric?.value || 0 / 3)}Mbps↑\nActive IoT devices: ${iotDevices.filter((d) => d.status === 'online').length}/${iotDevices.length}`;
    } else if (lowerCmd.startsWith('ping ')) {
      const deviceId = lowerCmd.split(' ')[1];
      const device = iotDevices.find((d) => d.id === deviceId);

      if (device) {
        output = `PING ${device.id} (${device.name})\nStatus: ${device.status.toUpperCase()}\nLocation: ${device.location}\nLast seen: ${device.lastPing}\nType: ${device.type}`;
      } else {
        output = `Error: Device ${deviceId} not found. Use 'system --status' to see available devices.`;
      }
    } else if (lowerCmd === 'deploy') {
      output = `Initiating deployment sequence...\n[====                ] 20%\n[========            ] 40%\n[============        ] 60%\n[================    ] 80%\n[====================] 100%\nDeployment successful. All services running.`;
    } else if (lowerCmd === 'pitch') {
      output = `Loading video pitch...\nOpening YouTube embed: ${personalInfo.youtubeLink}\n\nNOTE: Video will be displayed in the dashboard view. Type 'exit' to switch to dashboard.`;
      // Cambiar a la pestaña dashboard después de mostrar el mensaje
      setTimeout(() => {
        setActiveTab('dashboard');
      }, 2000);
    } else if (lowerCmd === 'exit') {
      setActiveTab('dashboard');
      return;
    } else {
      output = `Command not found: ${cmd}\nType 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { command: cmd, output }]);
    setTerminalInput('');

    // Scroll to bottom of terminal
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 0);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (terminalInput.trim()) {
      processCommand(terminalInput);
    }
  };

  // Función para renderizar el mini-gráfico de línea para métricas
  const renderMiniChart = (history: number[], max: number) => {
    const width = 60;
    const height = 20;
    const points = history
      .map((value, index) => {
        const x = (index / (history.length - 1)) * width;
        const y = height - (value / max) * height;
        return `${x},${y}`;
      })
      .join(' ');

    return (
      <svg width={width} height={height} className="text-green-400">
        <polyline
          points={points}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  };

  // Función para renderizar el color de estado de dispositivo IoT
  const getStatusColor = (status: 'online' | 'offline' | 'warning') => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'offline':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#D3D3D3] font-mono">
      {/* Header/Navigation */}
      <nav className="sticky top-0 z-50 bg-black border-b border-[#333333]">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            {personalInfo.profileImage ? (
              <img
                src={personalInfo.profileImage}
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#00FF66]"
              />
            ) : (
              <div className="bg-[#00FF66] text-black rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="font-bold text-sm">SB</span>
              </div>
            )}
            <div>
              <h1 className="text-[#00FF66] font-bold">santiago@barraza:~$</h1>
              <p className="text-xs text-[#D3D3D3]">v1.0.2 | {currentTime}</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs">
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-3 py-1 rounded-none border border-[#333333] transition-all ${activeTab === 'terminal' ? 'bg-[#00FF66] text-black' : 'text-[#D3D3D3] hover:border-[#00FF66]'}`}
            >
              <Terminal className="w-3 h-3 inline mr-1" />
              TERMINAL
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-3 py-1 rounded-none border border-[#333333] transition-all ${activeTab === 'dashboard' ? 'bg-[#00FF66] text-black' : 'text-[#D3D3D3] hover:border-[#00FF66]'}`}
            >
              <Activity className="w-3 h-3 inline mr-1" />
              DASHBOARD
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-3 py-1 rounded-none border border-[#333333] transition-all ${activeTab === 'experience' ? 'bg-[#00FF66] text-black' : 'text-[#D3D3D3] hover:border-[#00FF66]'}`}
            >
              <Briefcase className="w-3 h-3 inline mr-1" />
              EXPERIENCE
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-3 py-1 rounded-none border border-[#333333] transition-all ${activeTab === 'education' ? 'bg-[#00FF66] text-black' : 'text-[#D3D3D3] hover:border-[#00FF66]'}`}
            >
              <Book className="w-3 h-3 inline mr-1" />
              EDUCATION
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-3 py-1 rounded-none border border-[#333333] transition-all ${activeTab === 'projects' ? 'bg-[#00FF66] text-black' : 'text-[#D3D3D3] hover:border-[#00FF66]'}`}
            >
              <Code className="w-3 h-3 inline mr-1" />
              PROJECTS
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto px-4 py-6">
        {/* Terminal Section */}
        {activeTab === 'terminal' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3 bg-black border border-[#333333] rounded-sm p-2 h-[70vh] flex flex-col">
              <div className="flex items-center justify-between border-b border-[#333333] pb-1 mb-2">
                <div className="flex items-center">
                  <Terminal className="w-4 h-4 text-[#00FF66] mr-2" />
                  <span className="text-xs text-[#00FF66]">
                    TERMINAL v1.0.2
                  </span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div
                ref={terminalRef}
                className="flex-1 overflow-auto text-xs font-mono mb-2"
              >
                <div className="text-[#00FF66] mb-4">
                  <div className="overflow-x-auto">
                    <pre className="text-xs font-mono whitespace-pre min-w-[700px]">
                      {`
 ███████╗ █████╗ ███╗   ██╗████████╗██╗ █████╗  ██████╗  ██████╗      ██████╗  █████╗  ██████╗  ██████╗ █████╗  ███████╗   █████╗
 ██╔════╝██╔══██╗████╗  ██║╚══██╔══╝██║██╔══██╗██╔════╝ ██╔═  ██      ██╔══██╗██╔══██╗██╔══██╗ ██╔══██╗██╔══██╗╚════ ██║  ██╔══██╗
 ███████╗███████║██╔██╗ ██║   ██║   ██║███████║██║  ███╗██║   ██      ██████╔╝███████║██████╔╝ ██████╔╝███████║   ████╔╝  ███████║
 ╚════██║██╔══██║██║╚██╗██║   ██║   ██║██╔══██║██║   ██║██║   ██      ██╔══██╗██╔══██║██╔══██║ ██╔══██║██╔══██║ ██╔══╝    ██╔══██║
 ███████║██║  ██║██║ ╚████║   ██║   ██║██║  ██║╚██████╔╝╚██████╔╝     ██████╔╝██║  ██║██║  ██║ ██║  ██║██║  ██║ ███████╗  ██║  ██║
 ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝      ╚═════╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝  ╚══════╝  ╚═╝  ╚═╝                                             
                      `}
                    </pre>
                  </div>
                </div>
                <p className="text-[#00FF66] mb-4">
                  Welcome to Santiago's Terminal. Type 'help' for available
                  commands.
                </p>

                {terminalHistory.map((entry, index) => (
                  <div key={index} className="mb-3">
                    <div className="text-[#00FF66]">
                      <span className="text-[#D3D3D3]">
                        santiago@barraza:~$
                      </span>{' '}
                      {entry.command}
                    </div>
                    <pre className="text-[#D3D3D3] whitespace-pre-wrap mt-1">
                      {entry.output}
                    </pre>
                  </div>
                ))}
              </div>

              <form
                onSubmit={handleTerminalSubmit}
                className="flex border-t border-[#333333] pt-2"
              >
                <span className="text-[#D3D3D3] mr-2">santiago@barraza:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="flex-1 bg-transparent text-[#00FF66] outline-none"
                  autoFocus
                />
              </form>
            </div>

            <div className="bg-black border border-[#333333] rounded-sm p-2 h-[70vh] overflow-auto">
              <div className="border-b border-[#333333] pb-1 mb-2">
                <h2 className="text-xs text-[#00FF66] flex items-center">
                  <Activity className="w-4 h-4 mr-1" />
                  SYSTEM METRICS
                </h2>
              </div>

              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="border border-[#333333] p-2">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <div className="text-[#00FF66] mr-2">{metric.icon}</div>
                        <span className="text-xs">{metric.name}</span>
                      </div>
                      <span className="text-[#00FF66] text-xs font-bold">
                        {metric.value}
                        {metric.unit}
                      </span>
                    </div>
                    <div className="h-5">
                      {renderMiniChart(
                        metric.history,
                        Math.max(...metric.history) * 1.2,
                      )}
                    </div>
                  </div>
                ))}

                <div className="border border-[#333333] p-2">
                  <h3 className="text-xs text-[#00FF66] mb-2 flex items-center">
                    <Wifi className="w-4 h-4 mr-1" />
                    IoT DEVICES
                  </h3>
                  <div className="text-xs space-y-1">
                    {iotDevices.map((device, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center">
                          <div
                            className={`w-2 h-2 rounded-full ${getStatusColor(device.status)} mr-2`}
                          ></div>
                          <span>{device.name}</span>
                        </div>
                        <span className="text-[#999999]">
                          {device.lastPing}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard Section */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Left Panel - System Metrics */}
            <div className="bg-black border border-[#333333] rounded-sm p-3">
              <h2 className="text-sm text-[#00FF66] border-b border-[#333333] pb-2 mb-3 flex items-center">
                <Activity className="w-4 h-4 mr-2" />
                SYSTEM METRICS
              </h2>

              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="border border-[#333333] p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="text-[#00FF66] mr-2">{metric.icon}</div>
                        <span className="text-xs">{metric.name}</span>
                      </div>
                      <span className="text-[#00FF66] text-sm font-bold">
                        {metric.value}
                        {metric.unit}
                      </span>
                    </div>
                    <div className="h-8 bg-[#111111] relative">
                      <div
                        className="h-full bg-[#00FF66]/20"
                        style={{
                          width: `${(metric.value / (metric.name === 'CPU Usage' ? 100 : metric.name === 'Memory' ? 16 : 100)) * 100}%`,
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center text-xs">
                        {metric.name === 'CPU Usage' && `${metric.value}/100`}
                        {metric.name === 'Memory' && `${metric.value}/16GB`}
                        {metric.name === 'Network' && `${metric.value}Mbps`}
                        {metric.name === 'Latency' && `${metric.value}ms`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 border border-[#333333] p-3">
                <h3 className="text-sm text-[#00FF66] mb-2 flex items-center">
                  <Server className="w-4 h-4 mr-2" />
                  DEPLOYMENT STATUS
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Backend API</span>
                    <span className="text-green-400">ONLINE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Database</span>
                    <span className="text-green-400">ONLINE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frontend</span>
                    <span className="text-green-400">ONLINE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CI/CD Pipeline</span>
                    <span className="text-green-400">OPERATIONAL</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Deployment</span>
                    <span>2 hours ago</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 border border-[#333333] p-3">
                <h3 className="text-sm text-[#00FF66] mb-2 flex items-center">
                  <Cloud className="w-4 h-4 mr-2" />
                  CLOUD INFRASTRUCTURE
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Kubernetes Clusters</span>
                    <span className="text-green-400">3 ACTIVE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Docker Containers</span>
                    <span className="text-green-400">17 RUNNING</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AWS Lambda Functions</span>
                    <span className="text-green-400">12 DEPLOYED</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Terraform Modules</span>
                    <span className="text-green-400">8 MANAGED</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ML Models in Production</span>
                    <span className="text-green-400">5 SERVING</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Panel - IoT Network */}
            <div className="bg-black border border-[#333333] rounded-sm p-3">
              <h2 className="text-sm text-[#00FF66] border-b border-[#333333] pb-2 mb-3 flex items-center">
                <Wifi className="w-4 h-4 mr-2" />
                IoT NETWORK
              </h2>

              <div className="relative h-[300px] border border-[#333333] mb-4 bg-[#111111]">
                {/* Grid lines */}
                <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={`col-${i}`}
                      className="border-r border-[#222222] h-full"
                    ></div>
                  ))}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={`row-${i}`}
                      className="border-b border-[#222222] w-full"
                    ></div>
                  ))}
                </div>

                {/* IoT devices */}
                {iotDevices.map((device, index) => (
                  <div
                    key={index}
                    className="absolute w-3 h-3 rounded-full flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform"
                    style={{
                      left: `${device.x}%`,
                      top: `${device.y}%`,
                      backgroundColor:
                        device.status === 'online'
                          ? '#00FF66'
                          : device.status === 'warning'
                            ? '#FFD700'
                            : '#FF4136',
                    }}
                    title={`${device.name} (${device.id}) - ${device.status.toUpperCase()}`}
                  >
                    <div
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-30 ${
                        device.status === 'online'
                          ? 'bg-green-400'
                          : device.status === 'warning'
                            ? 'bg-yellow-400'
                            : 'bg-red-400'
                      }`}
                    ></div>
                  </div>
                ))}

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {iotDevices
                    .filter((d) => d.status === 'online')
                    .map((device, index) => {
                      const gatewayDevice = iotDevices.find(
                        (d) => d.id === 'dev-004',
                      );
                      if (gatewayDevice && device.id !== 'dev-004') {
                        return (
                          <line
                            key={index}
                            x1={`${device.x}%`}
                            y1={`${device.y}%`}
                            x2={`${gatewayDevice.x}%`}
                            y2={`${gatewayDevice.y}%`}
                            stroke="#00FF66"
                            strokeWidth="0.5"
                            strokeDasharray="5,5"
                            strokeOpacity="0.3"
                          />
                        );
                      }
                      return null;
                    })}
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {iotDevices.map((device, index) => (
                  <div key={index} className="border border-[#333333] p-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div
                          className={`w-2 h-2 rounded-full ${getStatusColor(device.status)} mr-2`}
                        ></div>
                        <span className="font-bold">{device.name}</span>
                      </div>
                      <span className="text-[#999999] text-xs">
                        {device.id}
                      </span>
                    </div>
                    <div className="mt-1 text-[#999999] text-xs">
                      <div>Location: {device.location}</div>
                      <div>Last ping: {device.lastPing}</div>
                      <div>Type: {device.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - Personal Info & Skills */}
            <div className="space-y-4">
              <div className="bg-black border border-[#333333] rounded-sm p-3">
                <h2 className="text-sm text-[#00FF66] border-b border-[#333333] pb-2 mb-3">
                  SYSTEM USER
                </h2>

                <div className="flex items-center gap-4 mb-4">
                  {personalInfo.profileImage ? (
                    <img
                      src={personalInfo.profileImage}
                      alt="Profile"
                      className="w-24 h-24 rounded-sm object-cover mr-4 border-2 border-[#00FF66]"
                    />
                  ) : (
                    <div className="bg-[#00FF66] text-black rounded-sm w-12 h-12 flex items-center justify-center mr-4">
                      <span className="font-bold text-sm">SB</span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-bold">{personalInfo.name}</h3>
                    <p className="text-xs text-[#999999]">
                      {personalInfo.title}
                    </p>
                    <p className="text-xs text-[#999999]">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="flex">
                    <span className="text-[#00FF66] w-20">EMAIL:</span>
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#00FF66] w-20">LINKEDIN:</span>
                    <span>{personalInfo.linkedin}</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#00FF66] w-20">GITHUB:</span>
                    <span>{personalInfo.github}</span>
                  </div>
                </div>

                {/* Video Pitch Section */}
                <div className="mt-4 border-t border-[#333333] pt-3">
                  <h3 className="text-xs text-[#00FF66] mb-2 flex items-center">
                    <Terminal className="w-3 h-3 mr-1" />
                    VIDEO PITCH
                  </h3>
                  <div className="aspect-video bg-[#111111] overflow-hidden rounded-sm">
                    <iframe
                      src={personalInfo.youtubeLink}
                      className="w-full h-full"
                      title="Video Pitch"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="bg-black border border-[#333333] rounded-sm p-3">
                <h2 className="text-sm text-[#00FF66] border-b border-[#333333] pb-2 mb-3 flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  TECHNICAL SKILLS
                </h2>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="border border-[#333333] p-2 flex items-center gap-2"
                    >
                      <div className="text-[#00FF66]">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeTab === 'experience' && (
          <div className="bg-black border border-[#333333] rounded-sm p-4">
            <h2 className="text-xl text-[#00FF66] border-b border-[#333333] pb-2 mb-4 flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="border border-[#333333] p-3 hover:border-[#00FF66] transition-colors"
                >
                  <div
                    className="flex justify-between items-start cursor-pointer"
                    onClick={() => toggleExperience(exp.id)}
                  >
                    <div className="flex gap-4 items-center">
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-10 h-10 rounded-sm"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-[#222222] rounded-sm flex items-center justify-center text-[#00FF66]">
                          <Briefcase className="w-5 h-5" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-xs text-[#999999]">{exp.company}</p>
                        <p className="text-xs text-[#999999]">{exp.period}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#00FF66] transition-transform ${activeExperienceId === exp.id ? 'transform rotate-180' : ''}`}
                    />
                  </div>
                  {activeExperienceId === exp.id && (
                    <div className="mt-4 pl-4 border-l border-[#00FF66] space-y-2 text-xs">
                      {exp.description.map((item, index) => (
                        <p key={index} className="text-[#D3D3D3]">
                          $ {item}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeTab === 'education' && (
          <div className="bg-black border border-[#333333] rounded-sm p-4">
            <h2 className="text-xl text-[#00FF66] border-b border-[#333333] pb-2 mb-4 flex items-center">
              <Book className="w-5 h-5 mr-2" />
              EDUCATION
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border border-[#333333] p-3 hover:border-[#00FF66] transition-colors"
                >
                  <div className="flex gap-4 items-center">
                    {edu.logo ? (
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-10 h-10 rounded-sm"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-[#222222] rounded-sm flex items-center justify-center text-[#00FF66]">
                        <Book className="w-5 h-5" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-sm font-bold">{edu.degree}</h3>
                      <p className="text-xs text-[#999999]">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-[#999999]">{edu.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl text-[#00FF66] border-b border-[#333333] pb-2 my-4 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              ACHIEVEMENTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="border border-[#333333] p-3 hover:border-[#00FF66] transition-colors"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-[#222222] rounded-sm flex items-center justify-center text-[#00FF66]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">{achievement.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <div className="bg-black border border-[#333333] rounded-sm p-4">
            <h2 className="text-xl text-[#00FF66] border-b border-[#333333] pb-2 mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              PROJECTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border border-[#333333] p-3 hover:border-[#00FF66] transition-colors"
                >
                  <h3 className="text-sm font-bold text-[#00FF66] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#D3D3D3] mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-[#222222] text-[#00FF66] rounded-sm text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-[#999999] flex items-center">
                    <Code className="w-3 h-3 mr-1" />
                    <span>Project ID: PRJ-{index + 1000}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-[#333333] py-4 text-xs">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0 text-center md:text-left">
            <p className="text-[#999999]">santiago@barraza:~$ echo $VERSION</p>
            <p className="text-[#00FF66]">v1.0.2-stable (build 20250510)</p>
          </div>
          <div className="flex gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-1 text-[#999999] hover:text-[#00FF66] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-[#999999] hover:text-[#00FF66] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-[#999999] hover:text-[#00FF66] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
