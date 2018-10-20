import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub723Component} from "./stub723.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub723Component
        }])
    ],
    declarations: [
        Stub723Component
    ]
})
export class Stub723Module {

}
