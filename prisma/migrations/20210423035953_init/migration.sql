/*
  Warnings:

  - Added the required column `imgUrl` to the `Writer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Writer` ADD COLUMN     `imgUrl` VARCHAR(2048) NOT NULL;
