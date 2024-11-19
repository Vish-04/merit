-- RenameForeignKey
ALTER TABLE "Email" RENAME CONSTRAINT "Email_departmentId_fkey" TO "Email_Department_fkey";

-- RenameForeignKey
ALTER TABLE "Email" RENAME CONSTRAINT "Email_professorId_fkey" TO "Email_Professor_fkey";

-- RenameForeignKey
ALTER TABLE "Email" RENAME CONSTRAINT "Email_user_email_fkey" TO "Email_User_fkey";

-- RenameForeignKey
ALTER TABLE "Personalization" RENAME CONSTRAINT "Personalization_departmentId_fkey" TO "Personalization_Department_fkey";

-- RenameForeignKey
ALTER TABLE "Personalization" RENAME CONSTRAINT "Personalization_professorId_fkey" TO "Personalization_Professor_fkey";

-- RenameForeignKey
ALTER TABLE "Personalization" RENAME CONSTRAINT "Personalization_user_email_fkey" TO "Personalization_User_fkey";
