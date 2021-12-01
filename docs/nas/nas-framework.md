# Framework design for NAS

It is pretty hard to use existing NAS work to help develop common DNN models. Therefore, we designed [Retiarii](https://www.usenix.org/system/files/osdi20-zhang_quanlu.pdf), a novel NAS/HPO framework, and implemented it in NNI. It helps users easily construct a model space (or search space, tuning space), and utilize existing NAS algorithms. The framework also facilitates NAS innovation and is used to design new NAS algorithms.

## Search space

### Define search space

## Strategy

### Architecture sampling
The process of selecting a specific architecture $a$ from the model search space is called *architecture sampling* and denoted by $a \sim \mathcal{A}$.

