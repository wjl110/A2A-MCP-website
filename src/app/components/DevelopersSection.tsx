'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DevelopersSection = () => {
  const features = [
    {
      title: '开发文档',
      description: '详尽的API文档和开发指南，助您快速上手',
      icon: '📚',
    },
    {
      title: 'SDK支持',
      description: '多语言SDK支持，简化开发流程',
      icon: '🛠️',
    },
    {
      title: '示例代码',
      description: '丰富的示例代码和最佳实践',
      icon: '💻',
    },
    {
      title: '技术社区',
      description: '活跃的开发者社区，分享经验与解决方案',
      icon: '👥',
    },
  ];

  return (
    <section id="developers" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            开发者生态
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            加入A2A-MCP开发者社区，探索无限可能
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            准备好开始了吗？
          </h3>
          <p className="text-lg mb-8 opacity-90">
            立即加入开发者计划，获取完整的开发资源和技术支持
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.a2a-mcp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white rounded-md text-white hover:bg-white hover:text-primary transition-colors duration-300"
            >
              浏览文档
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-md hover:bg-opacity-90 transition-colors duration-300"
            >
              申请加入
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopersSection; 