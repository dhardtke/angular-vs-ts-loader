import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub411Component} from "./stub411.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub411Component
        }])
    ],
    declarations: [
        Stub411Component
    ]
})
export class Stub411Module {

}
