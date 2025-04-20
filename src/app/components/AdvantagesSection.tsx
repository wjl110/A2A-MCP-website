'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AdvantagesSection = () => {
  const advantages = [
    {
      title: '高度兼容',
      description: '支持多种设备和平台，轻松集成到现有系统中',
      icon: '🔄',
    },
    {
      title: '实时协作',
      description: '毫秒级响应，支持多设备实时协同工作',
      icon: '⚡',
    },
    {
      title: '智能调度',
      description: '基于AI的智能任务分配和资源调度',
      icon: '🧠',
    },
    {
      title: '安全可靠',
      description: '端到端加密，确保数据传输和存储安全',
      icon: '🔒',
    },
    {
      title: '可扩展性',
      description: '支持横向扩展，轻松应对业务增长',
      icon: '📈',
    },
    {
      title: '开放生态',
      description: '丰富的API接口，支持第三方开发和集成',
      icon: '🔗',
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            核心优势
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            探索A2A-MCP为您带来的独特优势，助力企业数字化转型
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection; 