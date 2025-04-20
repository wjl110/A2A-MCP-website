'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ApplicationsSection = () => {
  const applications = [
    {
      title: '智能制造',
      description: '实现工业设备互联互通，提升生产效率和质量控制',
      image: '/images/manufacturing.jpg',
    },
    {
      title: '智慧城市',
      description: '连接城市基础设施，优化资源调度和市民服务',
      image: '/images/smart-city.jpg',
    },
    {
      title: '智能家居',
      description: '打造智能家居生态系统，提供便捷舒适的居住体验',
      image: '/images/smart-home.jpg',
    },
    {
      title: '医疗健康',
      description: '实现医疗设备互联和远程诊疗，提升医疗服务质量',
      image: '/images/healthcare.jpg',
    },
  ];

  return (
    <section id="applications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            应用场景
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            探索A2A-MCP在不同行业的创新应用，助力数字化转型
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-light/80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">{app.title}</h3>
                  <p className="text-lg opacity-90">{app.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            了解更多应用场景
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationsSection; 