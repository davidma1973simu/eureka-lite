/**
 * Eureka Lite - Utility Functions
 */

const Utils = {
  /**
   * Format date to Chinese format
   */
  formatDate(timestamp, format = 'full') {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    // Today
    if (date.toDateString() === now.toDateString()) {
      return I18N.t('date.today', '今天') + ' ' + this.formatTime(date);
    }

    // Yesterday
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
      return I18N.t('date.yesterday', '昨天') + ' ' + this.formatTime(date);
    }

    // This week
    if (diff < 7 * 24 * 60 * 60 * 1000) {
      const days = [
        I18N.t('date.sun', '周日'), I18N.t('date.mon', '周一'),
        I18N.t('date.tue', '周二'), I18N.t('date.wed', '周三'),
        I18N.t('date.thu', '周四'), I18N.t('date.fri', '周五'),
        I18N.t('date.sat', '周六')
      ];
      return days[date.getDay()] + ' ' + this.formatTime(date);
    }

    // Full date
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (format === 'full') {
      return `${year}${I18N.t('date.year', '年')}${month}${I18N.t('date.month', '月')}${day}${I18N.t('date.day', '日')}`;
    } else if (format === 'short') {
      return `${month}${I18N.t('date.month', '月')}${day}${I18N.t('date.day', '日')}`;
    }

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  },

  /**
   * Format time
   */
  formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  },

  /**
   * Format relative time
   */
  formatRelativeTime(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}${I18N.t('time.daysAgo', '天前')}`;
    if (hours > 0) return `${hours}${I18N.t('time.hoursAgo', '小时前')}`;
    if (minutes > 0) return `${minutes}${I18N.t('time.minutesAgo', '分钟前')}`;
    return I18N.t('time.justNow', '刚刚');
  },

  /**
   * Truncate text
   */
  truncate(text, length = 50) {
    if (!text || text.length <= length) return text;
    return text.substring(0, length) + '...';
  },

  /**
   * Get category info
   */
  getCategoryInfo(category) {
    const categories = {
      product: {
        name: I18N.t('cat.product', '产品创新'),
        icon: '🛠️',
        desc: I18N.t('cat.product.desc', '定义新产品或功能'),
        color: 'var(--reveal-primary)',
        theme: 'reveal'
      },
      service: {
        name: I18N.t('cat.service', '服务体验'),
        icon: '🎨',
        desc: I18N.t('cat.service.desc', '改善服务流程体验'),
        color: 'var(--inspire-primary)',
        theme: 'inspire'
      },
      problem: {
        name: I18N.t('cat.problem', '复杂问题'),
        icon: '🔍',
        desc: I18N.t('cat.problem.desc', '解决系统性难题'),
        color: 'var(--shape-primary)',
        theme: 'shape'
      },
      explore: {
        name: I18N.t('cat.explore', '探索验证'),
        icon: '💡',
        desc: I18N.t('cat.explore.desc', '验证模糊想法'),
        color: 'var(--exam-primary)',
        theme: 'exam'
      }
    };

    return categories[category] || categories.product;
  },

  /**
   * Get stage info
   */
  getStageInfo(stage) {
    const stages = {
      reveal: {
        name: 'Reveal',
        label: I18N.t('stage.reveal.label', '揭示'),
        icon: '🔍',
        color: 'var(--reveal-primary)',
        bgColor: 'var(--reveal-bg)',
        theme: 'theme-reveal',
        screens: 5,
        screenDefs: [
          { title: I18N.t('reveal.screen1.title', '创新场景与用户'), subtitle: I18N.t('reveal.screen1.sub', '描述目标用户和场景') },
          { title: I18N.t('reveal.screen2.title', '用户旅程地图'), subtitle: I18N.t('reveal.screen2.sub', '标记关键发现') },
          { title: I18N.t('reveal.screen3.title', '洞察用户痛点'), subtitle: I18N.t('reveal.screen3.sub', 'FIND 四步法分析') },
          { title: I18N.t('reveal.screen4.title', '对齐商业目标'), subtitle: I18N.t('reveal.screen4.sub', '利益相关方与假设') },
          { title: I18N.t('reveal.screen5.title', '项目简报'), subtitle: I18N.t('reveal.screen5.sub', '汇总所有洞察') }
        ]
      },
      inspire: {
        name: 'Inspire',
        label: I18N.t('stage.inspire.label', '启发'),
        icon: '💡',
        color: 'var(--inspire-primary)',
        bgColor: 'var(--inspire-bg)',
        theme: 'theme-inspire',
        screens: 5,
        screenDefs: [
          { title: I18N.t('inspire.screen1.title', '重构用户问题'), subtitle: I18N.t('inspire.screen1.sub', '从 POV 出发四维重构') },
          { title: I18N.t('inspire.screen2.title', '寻找灵感'), subtitle: I18N.t('inspire.screen2.sub', 'NCO 灵感卡片') },
          { title: I18N.t('inspire.screen3.title', '生成创意'), subtitle: I18N.t('inspire.screen3.sub', '强制连接创新') },
          { title: I18N.t('inspire.screen4.title', '筛选最佳创意'), subtitle: I18N.t('inspire.screen4.sub', '四维打分筛选') },
          { title: I18N.t('inspire.screen5.title', 'Inspire 总结'), subtitle: I18N.t('inspire.screen5.sub', '确认启发成果') }
        ]
      },
      shape: {
        name: 'Shape',
        label: I18N.t('stage.shape.label', '构建'),
        icon: '🎯',
        color: 'var(--shape-primary)',
        bgColor: 'var(--shape-bg)',
        theme: 'theme-shape',
        screens: 4,
        screenDefs: [
          { title: I18N.t('shape.screen1.title', '四维拷问'), subtitle: I18N.t('shape.screen1.sub', '用户/商业/技术/生态') },
          { title: I18N.t('shape.screen2.title', '最小概念方案'), subtitle: I18N.t('shape.screen2.sub', '功能与边界定义') },
          { title: I18N.t('shape.screen3.title', '故事板'), subtitle: I18N.t('shape.screen3.sub', '六张卡片讲完整故事') },
          { title: I18N.t('shape.screen4.title', 'Shape 总结'), subtitle: I18N.t('shape.screen4.sub', '确认构建成果') }
        ]
      },
      exam: {
        name: 'Exam',
        label: I18N.t('stage.exam.label', '验证'),
        icon: '📋',
        color: 'var(--exam-primary)',
        bgColor: 'var(--exam-bg)',
        theme: 'theme-exam',
        screens: 5,
        screenDefs: [
          { title: I18N.t('exam.screen1.title', '测试计划'), subtitle: I18N.t('exam.screen1.sub', '设计验证方案') },
          { title: I18N.t('exam.screen2.title', '测试报告'), subtitle: I18N.t('exam.screen2.sub', '记录验证结果') },
          { title: I18N.t('exam.screen3.title', '四维度评价'), subtitle: I18N.t('exam.screen3.sub', '多维度评估打分') },
          { title: I18N.t('exam.screen4.title', '电梯演讲'), subtitle: I18N.t('exam.screen4.sub', '呈现与迭代计划') },
          { title: I18N.t('exam.screen5.title', 'Exam 总结'), subtitle: I18N.t('exam.screen5.sub', '确认验证成果') }
        ]
      }
    };

    return stages[stage] || stages.reveal;
  },

  /**
   * Get progress percentage
   */
  getStageProgress(stage, screen, totalScreens) {
    const stageProgress = {
      reveal: 0,
      inspire: 25,
      shape: 50,
      exam: 75
    };

    const base = stageProgress[stage] || 0;
    const screenContribution = (screen / totalScreens) * 25;

    return Math.min(base + screenContribution, 100);
  },

  /**
   * Calculate overall project progress
   */
  getProjectProgress(project) {
    if (!project) return 0;

    const stageWeights = {
      reveal: 0,
      inspire: 25,
      shape: 50,
      exam: 75
    };

    const stageInfo = this.getStageInfo(project.stage);
    const baseProgress = stageWeights[project.stage] || 0;
    const screenProgress = ((project.currentScreen - 1) / stageInfo.screens) * 25;

    return Math.round(baseProgress + screenProgress);
  },

  /**
   * Debounce function
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * Throttle function
   */
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  /**
   * Copy to clipboard
   */
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('Copy failed:', err);
      return false;
    }
  },

  /**
   * Share content
   */
  async share(data) {
    if (navigator.share) {
      try {
        await navigator.share(data);
        return true;
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Share failed:', err);
        }
        return false;
      }
    }
    return false;
  },

  /**
   * Generate random ID
   */
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  },

  /**
   * Check if element is in viewport
   */
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  /**
   * Scroll to element smoothly
   */
  scrollToElement(element, offset = 0) {
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  },

  /**
   * Haptic feedback (mobile)
   */
  haptic(type = 'light') {
    if (navigator.vibrate) {
      const patterns = {
        light: [10],
        medium: [20],
        heavy: [30],
        success: [10, 50, 10],
        error: [30, 50, 30]
      };
      navigator.vibrate(patterns[type] || patterns.light);
    }
  }
};

// Export
window.Utils = Utils;
