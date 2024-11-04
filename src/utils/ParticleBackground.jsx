/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-14 12:19:37
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-10-27 00:16:58
 */
// ParticleBackground.js
import React, { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

const ParticleBackground = React.memo(() => {
  const [init, setInit] = useState(false);

  const particlesOptions = {
    background: {
      color: {
        // value: "#FFB6C1", // 背景颜色设置为空
      },
    },
    fpsLimit: 120, // 每秒帧数限制为120fps
    interactivity: {
      events: {
        onClick: {
          enable: true, // 启用点击事件
          mode: "push", // 点击时推送粒子
        },
        onHover: {
          enable: true, // 启用悬停事件
          mode: "repulse", // 悬停时排斥粒子
        },
        resize: true, // 启用窗口大小调整事件
      },
      modes: {
        push: {
          quantity: 2, // 点击时添加的粒子数量
        },
        repulse: {
          distance: 80, // 悬停时排斥粒子的距离
          duration: 0.4, // 悬停排斥效果的持续时间
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // 粒子颜色为白色
      },
      links: {
        color: "#ffffff", // 粒子连线颜色为白色
        distance: 150, // 粒子连线的最大距离
        enable: true, // 启用粒子连线
        opacity: 0.5, // 粒子连线透明度
        width: 1, // 粒子连线宽度
      },
      move: {
        direction: "none", // 粒子移动方向
        enable: true, // 启用粒子移动
        outModes: {
          default: "bounce", // 粒子碰到边界时反弹
        },
        random: true, // 粒子随机移动
        speed: 2.5, // 粒子移动速度
        straight: false, // 粒子不沿直线移动
      },
      number: {
        density: {
          enable: true, // 启用粒子密度计算
          area: 800, // 粒子活动区域面积
        },
        value: 180, // 粒子数量
      },
      opacity: {
        value: 0.5, // 粒子透明度
      },
      shape: {
        type: "circle", // 粒子形状为圆形
      },
      size: {
        value: { min: 1, max: 5 }, // 粒子大小范围
      },
    },
    detectRetina: true, // 启用视网膜屏优化
  };

  // 使用useEffect钩子初始化粒子效果引擎
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 粒子效果容器加载回调
  const particlesLoaded = () => {
    // console.log(container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
        />
      )}
    </>
  );
});

ParticleBackground.displayName = "ParticleBackground";

export default ParticleBackground;
