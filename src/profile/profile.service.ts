import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'John Doe',
      description: 'Software Engineer',
    },
    {
      id: randomUUID(),
      name: 'Jane Smith',
      description: 'Product Manager',
    },
    {
      id: randomUUID(),
      name: 'Bob Johnson',
      description: 'Designer',
    },
  ];

  findAll() {
    return this.profiles;
  }
  findOne(id: string) {
    return this.profiles.find((profile) => profile.id === id);
  }

  create(createProfileDto: CreateProfileDto) {
    const newProfile = {
      id: randomUUID(),
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
    this.profiles.push(newProfile);
    return newProfile;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const profile = this.profiles.find((profile) => profile.id === id);
    if (!profile) {
      throw new Error('Profile not found');
    }
    Object.assign(profile, updateProfileDto);
    return profile;
  }

  remove(id: string) {
    const profileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );
    if (profileIndex === -1) {
      throw new Error('Profile not found');
    }
    return this.profiles.splice(profileIndex, 1)[0];
  }
}
