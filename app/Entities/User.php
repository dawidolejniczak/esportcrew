<?php

namespace App\Entities;

use Backpack\CRUD\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Permission\Traits\HasRoles;

class User extends Model implements Transformable
{
    use TransformableTrait;
    use CrudTrait;
    use HasRoles;

    protected $fillable = [
        'name',
        'email',
        'image',
        'password'
    ];
}
