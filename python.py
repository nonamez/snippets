# add vars to scope
locals().update(vars(args))
globals().update(vars(args))
vars(self).update(vars(args)) or self.__dict__.update(vars(args))