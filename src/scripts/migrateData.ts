import { volunteerService } from '../services/volunteerService';
import volunteerData from '../data/volunteers.json';

// 志愿者数据迁移脚本
export const migrateVolunteerData = async () => {
  try {
    console.log('开始数据迁移...');
    
    // 将JSON数据转换为Firebase格式
    const volunteers = volunteerData.map(volunteer => ({
      ...volunteer,
      id: volunteer.id.toString(), // 确保ID是字符串
    }));

    // 遍历并添加每个志愿者机会到Firebase
    for (const volunteer of volunteers) {
      const { id, ...volunteerWithoutId } = volunteer;
      
      try {
        const docId = await volunteerService.addVolunteer(volunteerWithoutId);
        console.log(`已迁移: ${volunteer.title} (ID: ${docId})`);
      } catch (error) {
        console.error(`迁移失败: ${volunteer.title}`, error);
      }
    }

    console.log('数据迁移完成！');
  } catch (error) {
    console.error('数据迁移失败:', error);
  }
};

// 如果直接运行此脚本，则执行迁移
if (require.main === module) {
  migrateVolunteerData();
} 