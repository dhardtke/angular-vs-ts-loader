import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub125Component} from "./stub125.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub125Component
        }])
    ],
    declarations: [
        Stub125Component
    ]
})
export class Stub125Module {

}
