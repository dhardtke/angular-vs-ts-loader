import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub228Component} from "./stub228.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub228Component
        }])
    ],
    declarations: [
        Stub228Component
    ]
})
export class Stub228Module {

}
