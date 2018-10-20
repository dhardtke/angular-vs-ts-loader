import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub180Component} from "./stub180.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub180Component
        }])
    ],
    declarations: [
        Stub180Component
    ]
})
export class Stub180Module {

}
