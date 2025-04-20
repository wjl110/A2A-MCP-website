'use client';

import React from 'react';
import { motion } from 'framer-motion';

const InsightsSection = () => {
  const insights = [
    {
      title: '智能协作的未来：A2A-MCP的创新之路',
      category: '技术前沿',
      date: '2024-03-15',
      excerpt: '探讨A2A-MCP如何重新定义设备间的智能协作模式，引领行业创新。',
      image: '/images/insights-1.jpg',
    },
    {
      title: '案例分析：某制造企业数字化转型实践',
      category: '案例研究',
      date: '2024-03-10',
      excerpt: '深入分析制造企业如何通过A2A-MCP实现智能制造升级。',
      image: '/images/insights-2.jpg',
    },
    {
      title: '2024年智能协作技术发展趋势报告',
      category: '行业报告',
      date: '2024-03-05',
      excerpt: '解读最新的智能协作技术发展趋势，展望未来发展方向。',
      image: '/images/insights-3.jpg',
    },
  ];

  return (
    <section id="insights" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            新闻与洞察
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            了解行业最新动态，把握技术发展趋势
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary-light">
                    {insight.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {insight.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-primary-light transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {insight.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-light hover:text-primary transition-colors"
                >
                  阅读更多
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.article>
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
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-light text-primary-light rounded-md hover:bg-primary-light hover:text-white transition-all duration-300"
          >
            查看更多洞察
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection; 