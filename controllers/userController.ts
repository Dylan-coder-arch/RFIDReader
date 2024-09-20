import { Database, Statement } from 'sqlite';
import User from '../model/user';

class UserController {
  constructor(private db: Database) {}

  // async createUser(task: User): Promise<User> {
  //   const { userID } = task;
  //   const sql = 'INSERT INTO tasks (title, description) VALUES (?, ?)';

  //   const result = await this.db.run(sql, [userID]);
  //   if (result.lastID) {
  //     const createdTask = await this.getTaskById(result.lastID);
  //     return createdTask!;
  //   } else {
  //     throw new Error('Failed to create task');
  //   }
  // }

  async getUserById(id: string): Promise<User | undefined> {
    const sql = 'SELECT * FROM user WHERE UserID = ?';
    const row = await this.db.get(sql, [id]);
    return row as User | undefined;
  }

  // async updateTask(id: number, updatedTask: Task): Promise<Task | undefined> {
  //   const { title, description } = updatedTask;
  //   const sql = 'UPDATE tasks SET title = ?, description = ? WHERE id = ?';

  //   const result = await this.db.run(sql, [title, description, id]);
  //   if (result.changes > 0) {
  //     return updatedTask;
  //   } else {
  //     throw new Error('Task not found or update failed');
  //   }
  // }

  // async deleteTask(id: number): Promise<void> {
  //   const sql = 'DELETE FROM tasks WHERE id = ?';
  //   const result = await this.db.run(sql, [id]);
  //   if (result.changes === 0) {
  //     throw new Error('Task not found or deletion failed');
  //   }
  // }
}

export default UserController;
